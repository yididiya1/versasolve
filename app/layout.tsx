import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://versasolveconsulting.com'),
  title: {
    default: 'VersaSolve Consulting — Web Design, Branding & AI-Search Visibility in New England',
    template: '%s · VersaSolve Consulting',
  },
  description:
    'New England web design, branding, and AI-search visibility for nonprofits, small businesses, and mission-driven organizations. Built to be found — and maintained so it stays that way.',
  applicationName: 'VersaSolve Consulting',
  authors: [{ name: 'Abedom Gebreyesus', url: 'https://www.linkedin.com/in/abedom-gebreyesus-697102175/' }],
  creator: 'Abedom Gebreyesus',
  publisher: 'VersaSolve Consulting',
  keywords: [
    'nonprofit web design Maine',
    'nonprofit website design New England',
    'small business web design Portland Maine',
    'web design for mission-driven organizations',
    'Portland Maine web design',
    'AEO services New England',
    'how to rank in ChatGPT and Perplexity',
    'what is AEO vs SEO',
    'Google Ad Grant setup for nonprofits',
    'website maintenance retainer New England',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'VersaSolve Consulting',
    title: 'VersaSolve Consulting — Web Design, Branding & AI-Search Visibility in New England',
    description:
      'New England web design, branding, and AI-search visibility for nonprofits, small businesses, and mission-driven organizations. Built to be found — and maintained so it stays that way.',
    url: 'https://versasolveconsulting.com',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VersaSolve Consulting — New England Web Design & AI-Search Visibility',
    description:
      'Web design, branding, and SEO/AEO/GEO for nonprofits and mission-driven organizations across New England.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'Web Design & Digital Marketing',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${spaceMono.variable}`}
    >
      <body className="font-body bg-page text-deep antialiased overflow-x-hidden">
        <ScrollRevealProvider />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
