/**
 * generate-sitemap.ts
 *
 * Run with:  npx tsx scripts/generate-sitemap.ts
 * Or via npm: npm run sitemap
 *
 * Writes public/sitemap.xml with all static, project, and article routes.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const BASE_URL = process.env.VITE_PROD_URL ?? '';

interface SitemapEntry {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const staticRoutes: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/projects', changefreq: 'monthly', priority: 0.9 },
  { loc: '/technology', changefreq: 'monthly', priority: 0.8 },
  { loc: '/articles', changefreq: 'weekly', priority: 0.9 },
  { loc: '/tutorials', changefreq: 'weekly', priority: 0.9 },
  { loc: '/build-log', changefreq: 'weekly', priority: 0.8 },
  { loc: '/release', changefreq: 'weekly', priority: 0.9 },
  { loc: '/about', changefreq: 'monthly', priority: 0.7 },
  { loc: '/contact', changefreq: 'yearly', priority: 0.5 },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { loc: '/terms', changefreq: 'yearly', priority: 0.3 },
  { loc: '/disclaimer', changefreq: 'yearly', priority: 0.3 },
  // Project detail pages
  { loc: '/projects/aether-ai', changefreq: 'monthly', priority: 0.8 },
  { loc: '/projects/gringotts-wizarding-bank', changefreq: 'monthly', priority: 0.8 },
  { loc: '/projects/voyager-chat', changefreq: 'monthly', priority: 0.8 },
  { loc: '/projects/project-blackout', changefreq: 'monthly', priority: 0.8 },
];

const articleSlugs = [
  'building-aether-ai-architecture',
  'understanding-rag-with-aether-ai',
  'deploying-aether-ai-vercel-render',
  'integrating-gemini-llm-aether-ai',
  'building-fullstack-banking-simulation',
  'jwt-auth-banking-simulation',
  'pdf-qr-verification-gringotts',
  'database-design-gringotts-simulation',
  'voyager-chat-realtime-architecture',
  'exploring-ble-mesh-voyager-chat',
  'dual-database-strategy-voyager-chat',
  'end-to-end-encryption-voyager-chat',
  'project-blackout-unreal-engine-5',
  'game-networking-project-blackout',
  'building-vehicle-ai-systems-blackout',
  'graphics-apis-unreal-engine-5-blackout',
];

const dynamicRoutes: SitemapEntry[] = articleSlugs.map((slug) => ({
  loc: `/articles/${slug}`,
  changefreq: 'monthly',
  priority: 0.7,
}));

const allRoutes = [...staticRoutes, ...dynamicRoutes];

function buildSitemap(routes: SitemapEntry[]): string {
  const urls = routes
    .map(
      ({ loc, changefreq, priority }) => `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const xml = buildSitemap(allRoutes);
const outPath = path.join(ROOT, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ Sitemap written to ${outPath} (${allRoutes.length} URLs)`);
