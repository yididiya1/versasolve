import { SITE, FOUNDER, SERVICES, TESTIMONIALS, EMAIL, BOOKING_URL, type ServiceKey } from '@/lib/siteData'

/**
 * Site-wide JSON-LD. Encodes only publishable, corroborated facts:
 * - ProfessionalService (Organization) with founder, service-area, sameAs, services, reviews, contactPoint.
 * - Person (founder) with credentials.
 * - WebSite.
 * (FAQPage lives on the dedicated /faq page to keep a single canonical FAQ resource.)
 *
 * Intentionally excluded:
 * - telephone           → no public phone; contact is email + Google Meet booking only.
 * - aggregateRating     → no rating scale exists; fabricating one is a violation.
 * - VersaVantage        → separate entity (founder's startup), not a VersaSolve service.
 */
const ORG_ID = `${SITE.url}/#organization`
const PERSON_ID = `${SITE.url}/#abedom`
const WEBSITE_ID = `${SITE.url}/#website`

// Published starting prices → AggregateOffer ("from" ranges). USD.
const OFFERS: Partial<Record<ServiceKey, { low: number; high: number }>> = {
  website: { low: 900, high: 3000 },
  versacare: { low: 450, high: 900 },
}

const graph = [
  {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-mark-gold.svg`,
    image: `${SITE.url}/opengraph-image`,
    description: SITE.elevatorPitch,
    slogan: 'Built to be found — and maintained so it stays that way.',
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsAbout: [
      'Web design',
      'Brand identity',
      'Search Engine Optimization',
      'Answer Engine Optimization',
      'Generative Engine Optimization',
      'Nonprofit marketing',
      'Google Ad Grants',
    ],
    sameAs: SITE.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: EMAIL,
      url: BOOKING_URL,
      availableLanguage: 'English',
    },
    review: TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: {
        '@type': 'Person',
        name: t.author,
        jobTitle: t.title,
        worksFor: { '@type': 'Organization', name: t.org },
      },
      itemReviewed: { '@id': ORG_ID },
    })),
  },
  {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.shortBio,
    worksFor: { '@id': ORG_ID },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Southern Maine' },
      { '@type': 'CollegeOrUniversity', name: 'University of Winchester' },
    ],
    sameAs: [FOUNDER.linkedin],
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  },
  // Services as Service nodes; priced services carry an AggregateOffer ("from" range).
  ...SERVICES.map((s) => {
    const priced = OFFERS[s.key]
    return {
      '@type': 'Service',
      '@id': `${SITE.url}/#service-${s.key}`,
      name: s.name,
      description: s.description,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'AdministrativeArea', name: 'New England' },
      ...(priced && {
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: priced.low,
          highPrice: priced.high,
        },
      }),
    }
  }),
]

export default function StructuredData() {
  const json = { '@context': 'https://schema.org', '@graph': graph }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
