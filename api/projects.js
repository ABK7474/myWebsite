// GET /api/projects: GitHub projects selected and described by Gemini.
// The CDN caches the response for a day, so Gemini runs rarely.
const { getCuratedProjects } = require('./_lib/projects');

module.exports = async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'method_not_allowed' });
    }
    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'not_configured', projects: [] });
    }

    try {
        const projects = await getCuratedProjects();
        res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
        return res.status(200).json({ projects });
    } catch (err) {
        console.error('projects error', err);
        res.setHeader('Cache-Control', 'public, s-maxage=300');
        return res.status(502).json({ error: 'upstream_error', projects: [] });
    }
};
