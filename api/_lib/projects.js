// Picks the noteworthy repos from GitHub with Gemini and writes short TR/EN
// descriptions. Shared by /api/projects (the page) and /api/chat (the assistant).
// Files under api/_lib are not exposed as endpoints by Vercel.
const SITE_DATA = require('../../data.js');

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const CACHE_MS = 6 * 60 * 60 * 1000;
const README_CHARS = 3000;
const MAX_PROJECTS = 6;

let cache = { at: 0, projects: null, pending: null };

async function github(path, accept = 'application/vnd.github+json') {
    const headers = { 'Accept': accept, 'User-Agent': 'abkaynak.com' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com${path}`, { headers });
    if (!res.ok) throw new Error(`GitHub ${res.status} for ${path}`);
    return accept.includes('raw') ? res.text() : res.json();
}

async function fetchRepos() {
    const exclude = new Set((SITE_DATA.githubExclude || []).map(name => name.toLowerCase()));
    const lists = await Promise.all((SITE_DATA.githubUsers || []).map(user =>
        github(`/users/${encodeURIComponent(user)}/repos?per_page=100&sort=pushed`)
    ));
    const repos = lists.flat().filter(r => !r.fork && !r.archived && !exclude.has(r.name.toLowerCase()));

    return Promise.all(repos.map(async r => {
        let readme = '';
        try {
            readme = await github(`/repos/${r.full_name}/readme`, 'application/vnd.github.raw');
        } catch (e) {}
        return {
            id: r.full_name,
            name: r.name,
            url: r.html_url,
            homepage: r.homepage || null,
            description: r.description || '',
            language: r.language || '',
            topics: r.topics || [],
            stars: r.stargazers_count,
            pushedAt: r.pushed_at,
            readme: readme.slice(0, README_CHARS)
        };
    }));
}

const PROMPT = `
Aşağıda bir bilgisayar mühendisliği öğrencisinin (gömülü sistemler ve Edge AI odaklı) GitHub depoları var.
Kişisel portfolyo sitesinde gösterilmeye değer olanları seç.

Seçim ölçütleri:
- Gerçekten çalışan, bir sorunu çözen ya da kayda değer emek/öğrenme gösteren projeleri seç.
- Boş, neredeyse boş, sadece şablon, ders alıştırması kopyası veya README'si ve açıklaması olmayıp ne yaptığı anlaşılmayan depoları ALMA.
- En fazla ${MAX_PROJECTS} proje; en etkileyiciden başlayarak sırala. Uygun proje yoksa boş liste döndür.

Her seçilen proje için:
- "id": deponun id alanı, aynen.
- "title": okunaklı bir proje adı (depo adından türet, uydurma marka adı verme).
- "tr" ve "en": 1-2 cümlelik açıklama. YALNIZCA README, açıklama ve dil bilgisine dayan; olmayan özellik, sonuç veya sayı uydurma.
- "tags": 2-4 kısa teknoloji etiketi (dil, kütüphane, platform).

Depolar (JSON):
`.trim();

const SCHEMA = {
    type: 'object',
    properties: {
        projects: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    tr: { type: 'string' },
                    en: { type: 'string' },
                    tags: { type: 'array', items: { type: 'string' } }
                },
                required: ['id', 'title', 'tr', 'en', 'tags']
            }
        }
    },
    required: ['projects']
};

async function curate(repos) {
    if (!repos.length) return [];
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
        body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `${PROMPT}\n${JSON.stringify(repos)}` }] }],
            generationConfig: {
                temperature: 0.2,
                responseMimeType: 'application/json',
                responseSchema: SCHEMA,
                thinkingConfig: { thinkingLevel: 'low' }
            }
        })
    });
    if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text().catch(() => '')}`);
    const data = await res.json();
    const text = (data.candidates?.[0]?.content?.parts || []).map(p => (p.thought ? '' : p.text || '')).join('');
    const picked = JSON.parse(text).projects || [];

    // Links come from GitHub, never from the model; drop anything it made up.
    const byId = new Map(repos.map(r => [r.id, r]));
    return picked
        .filter(p => byId.has(p.id))
        .slice(0, MAX_PROJECTS)
        .map(p => {
            const repo = byId.get(p.id);
            return {
                title: p.title,
                desc: { tr: p.tr, en: p.en },
                tags: (p.tags || []).slice(0, 4),
                github: repo.url,
                demo: repo.homepage
            };
        });
}

// Cached per serverless instance; concurrent callers share one in-flight request.
async function getCuratedProjects() {
    if (cache.projects && Date.now() - cache.at < CACHE_MS) return cache.projects;
    if (!cache.pending) {
        cache.pending = fetchRepos()
            .then(curate)
            .then(projects => {
                cache = { at: Date.now(), projects, pending: null };
                return projects;
            })
            .catch(err => {
                cache.pending = null;
                throw err;
            });
    }
    return cache.pending;
}

module.exports = { getCuratedProjects, MODEL };
