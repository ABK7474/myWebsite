// Vercel serverless function: proxies chat messages to the Gemini API so the
// API key stays on the server. Streams the reply back as plain text.
const { buildSystemInstruction } = require('./profile');
const { getCuratedProjects, MODEL } = require('./_lib/projects');
const MAX_MESSAGES = 12;          // conversation turns kept per request
const MAX_MESSAGE_CHARS = 1000;   // per user message
const RATE_LIMIT = 20;            // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

const DEFAULT_ORIGINS = ['https://abkaynak.com', 'https://www.abkaynak.com'];

// Best-effort, per-instance limiter. Serverless instances don't share memory,
// so this slows abuse rather than guaranteeing a hard cap.
const hits = new Map();
function rateLimited(ip) {
    const now = Date.now();
    const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > RATE_LIMIT;
}

function originAllowed(origin) {
    if (!origin) return false;
    const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    if ([...DEFAULT_ORIGINS, ...extra].includes(origin)) return true;
    // Vercel preview deployments and local development
    return /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin) || /^http:\/\/localhost(:\d+)?$/.test(origin);
}

function sanitizeMessages(raw) {
    if (!Array.isArray(raw)) return null;
    const messages = raw
        .filter(m => m && (m.role === 'user' || m.role === 'model') && typeof m.text === 'string')
        .slice(-MAX_MESSAGES)
        .map(m => ({ role: m.role, parts: [{ text: m.text.slice(0, MAX_MESSAGE_CHARS) }] }));
    if (!messages.length || messages[messages.length - 1].role !== 'user') return null;
    return messages;
}

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'method_not_allowed' });
    }
    if (!originAllowed(req.headers.origin)) {
        return res.status(403).json({ error: 'forbidden' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'not_configured' });
    }

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
    if (rateLimited(ip)) {
        return res.status(429).json({ error: 'rate_limited' });
    }

    const contents = sanitizeMessages(req.body && req.body.messages);
    if (!contents) {
        return res.status(400).json({ error: 'bad_request' });
    }

    // GitHub projects are optional context; chat still works if fetching them fails
    let githubProjects = [];
    try {
        githubProjects = await getCuratedProjects();
    } catch (err) {
        console.error('projects unavailable for chat', err.message);
    }

    let upstream;
    try {
        upstream = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: buildSystemInstruction(githubProjects) }] },
                    contents,
                    generationConfig: { temperature: 0.4, maxOutputTokens: 600 }
                })
            }
        );
    } catch (err) {
        return res.status(502).json({ error: 'upstream_unreachable' });
    }

    if (!upstream.ok || !upstream.body) {
        console.error('Gemini error', upstream.status, await upstream.text().catch(() => ''));
        return res.status(502).json({ error: 'upstream_error' });
    }

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
    });

    // Gemini streams Server-Sent Events; forward only the text parts.
    const decoder = new TextDecoder();
    let buffer = '';
    for await (const chunk of upstream.body) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
            if (!line.startsWith('data:')) continue;
            try {
                const data = JSON.parse(line.slice(5));
                const parts = data.candidates?.[0]?.content?.parts || [];
                const text = parts.map(p => (p.thought ? '' : p.text || '')).join('');
                if (text) res.write(text);
            } catch (e) {}
        }
    }
    res.end();
};
