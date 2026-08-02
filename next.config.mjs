/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  /**
   * Legacy slugs → their real destinations. Permanent (308) so the old URLs consolidate
   * their signals into the new pages instead of competing with them.
   *
   * /about and /contact are intentionally absent: both are now real routes, so a redirect
   * there would shadow the pages themselves.
   */
  async redirects() {
    return [
      { source: '/homev2', destination: '/', permanent: true },
      { source: '/versa-solve-consulting', destination: '/about', permanent: true },
      { source: '/digital-branding-optimization', destination: '/services/brand-identity', permanent: true },
      { source: '/optimized-digital-brands', destination: '/services/brand-identity', permanent: true },
    ]
  },
}

export default nextConfig
