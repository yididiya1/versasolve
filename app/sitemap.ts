import type { MetadataRoute } from 'next'

const BASE = 'https://versasolveconsulting.com'

/**
 * lastModified reflects the date each route's source was last changed, taken from git
 * rather than `new Date()` — a build-time timestamp would claim every page changed on
 * every deploy, which trains crawlers to ignore the field.
 */
const EXISTING = '2026-07-27'
// Last actual content change to the Phase 1 pages (entity-disambiguation pass).
// This is a content date, not a deploy date — bump it only when the copy changes.
const PHASE_1 = '2026-08-01'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: EXISTING, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/ai-search-visibility`, lastModified: EXISTING, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/web-design`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/seo-aeo-geo`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/versacare`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/brand-identity`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: EXISTING, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: PHASE_1, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
