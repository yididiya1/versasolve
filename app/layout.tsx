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
  title: 'VersaSolve Consulting — Cultivating Solutions To Empower Organizations',
  description:
    'VersaSolve Consulting leverages organizational culture strategies, digital branding optimization, and impact-driven solutions to help businesses and nonprofits thrive.',
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
