import type { Metadata } from 'next'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import { FAQS, SITE } from '@/lib/siteData'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers on how VersaSolve Consulting works — AEO and GEO, SEO, VersaCare monthly care, pricing, timelines, and getting started. Serving nonprofits and businesses across New England.',
  alternates: { canonical: '/faq' },
  openGraph: {
    type: 'website',
    title: 'VersaSolve Consulting — Frequently Asked Questions',
    description:
      'Straight answers on web design, AI-search visibility (SEO/AEO/GEO), VersaCare, pricing, and timelines for New England organizations.',
    url: `${SITE.url}/faq`,
  },
}

export default function FaqPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/faq#faqpage`,
        url: `${SITE.url}/faq`,
        name: 'VersaSolve Consulting — Frequently Asked Questions',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#organization` },
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {/* spacer so the fixed nav doesn't overlap the first heading */}
      <div className="h-16" aria-hidden />
      <FAQ />
      <Contact />
    </main>
  )
}
