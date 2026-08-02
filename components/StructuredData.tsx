import { SITE, FOUNDER, TESTIMONIALS, EMAIL, BOOKING_URL, ORG_ID, PERSON_ID, WEBSITE_ID } from '@/lib/siteData'

/**
 * Site-wide JSON-LD, rendered from the root layout so it appears on EVERY page.
 * That placement is deliberate: /faq, /ai-search-visibility, and every /services/* page
 * reference `#organization`, `#abedom`, and `#website` by @id, and those references only
 * resolve if the defining node is present in the same document. This file is the single
 * place those three nodes are defined — no other page may redefine them.
 *
 * Service nodes deliberately live OUTSIDE this component (see ServiceCatalog for the
 * homepage, and serviceSchema() on each /services/* page). If they were emitted here as
 * well, a service page would carry the same Service @id twice in one document.
 *
 * Encodes only publishable, corroborated facts:
 * - ProfessionalService (Organization) with founder, service-area, sameAs, reviews, contactPoint.
 * - Person (founder) with credentials.
 * - WebSite.
 * (FAQPage lives on the dedicated /faq page to keep a single canonical FAQ resource.)
 *
 * Intentionally excluded:
 * - telephone           → no public phone; contact is email + Google Meet booking only.
 * - aggregateRating     → no rating scale exists; fabricating one is a violation.
 * - VersaVantage        → separate entity (founder's startup), not a VersaSolve service.
 */
const graph = [
  {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: SITE.legalName,
    url: SITE.url,
    // Raster, not SVG: Google's Organization logo is consumed far more reliably as a
    // PNG. The SVG is kept for in-page rendering (Nav/Footer) where it stays crisp.
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/logo-mark-gold.png`,
      width: 512,
      height: 512,
      caption: SITE.name,
    },
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
