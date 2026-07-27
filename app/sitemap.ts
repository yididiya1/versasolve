import type { MetadataRoute } from 'next'

// Single-page site today. Add entries here as real pages (pillar content, case studies) ship.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://versasolveconsulting.com',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
