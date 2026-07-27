import type { MetadataRoute } from 'next'

const BASE = 'https://versasolveconsulting.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/ai-search-visibility`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
