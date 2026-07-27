import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://versasolveconsulting.com/sitemap.xml',
    host: 'https://versasolveconsulting.com',
  }
}
