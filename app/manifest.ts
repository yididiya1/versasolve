import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VersaSolve Consulting',
    short_name: 'VersaSolve',
    description:
      'New England web design, branding, and AI-search visibility for nonprofits, small businesses, and mission-driven organizations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#120E09',
    theme_color: '#120E09',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
