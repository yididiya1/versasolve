import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable from '@/components/page/DataTable'
import CtaBand from '@/components/page/CtaBand'
import { SITE, breadcrumbList, serviceSchema } from '@/lib/siteData'

const DESC =
  'VersaSolve Consulting LLC provides brand identity for nonprofits, small businesses, and mission-driven organizations across Maine and Massachusetts: logo, color, type, and messaging that stay consistent everywhere someone encounters your organization.'

export const metadata: Metadata = {
  title: 'Brand Identity',
  description: DESC,
  alternates: { canonical: '/services/brand-identity' },
  openGraph: {
    type: 'website',
    title: 'Brand Identity · VersaSolve Consulting',
    description: DESC,
    url: `${SITE.url}/services/brand-identity`,
  },
}

const elements: React.ReactNode[][] = [
  ['Logo', 'The mark people recognize before they read anything', 'Website header, social avatars, print, video'],
  ['Color', 'A defined palette instead of approximations picked per project', 'Every surface, including documents and slides'],
  ['Type', 'A consistent typeface system for headings and body text', 'Website, printed material, presentations'],
  ['Messaging', 'How the organization describes what it does and who it serves', 'Website copy, social bios, grant and donor material'],
]

const work: React.ReactNode[][] = [
  [
    'New American Association of Massachusetts',
    'Nonprofit · Massachusetts',
    'Brand identity and website for an organization serving refugees and immigrants (naamass.org)',
  ],
  [
    'NAAM Artisans',
    'Nonprofit program',
    'Storefront and program site for New American women artisans (naamartisans.org)',
  ],
]

export default function BrandIdentityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema('brand', {
        serviceType: 'Brand identity design',
        alternateName: ['Branding', 'Logo and visual identity design'],
      }),
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'Brand Identity', path: '/services/brand-identity' },
      ]),
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service · Brand Identity"
        title={
          <>
            Brand <span className="text-gradient-warm">identity</span>
          </>
        }
        lead={
          <>
            Brand identity work at VersaSolve Consulting covers logo, color, type, and messaging, so an organization
            looks consistent everywhere someone encounters it. It is most often built alongside a website so the identity
            and the site launch together, and it is the usual starting point for organizations whose current presence is
            outdated or looks identical to a template.
          </>
        }
        secondary={{ label: 'See website builds', href: '/services/web-design' }}
      />

      {/* ── What's included ── */}
      <Section
        heading="What is included in a brand identity project?"
        tone="soft"
        intro={
          <p>
            A VersaSolve brand identity project covers four elements. Together they are what makes an
            organization recognizable across every surface a supporter, customer, or funder might encounter.
          </p>
        }
      >
        <DataTable
          caption="Elements of a VersaSolve identity project"
          columns={['Element', 'What it is', 'Where it shows up']}
          rows={elements}
          minWidth={720}
        />
      </Section>

      {/* ── When you need it ── */}
      <Section heading="When does an organization need a new brand identity?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            The clearest signal is a presence that is outdated or identical to a template many other organizations are
            using. A template identity is not merely a design problem: when an organization looks like everyone else, it
            gives people nothing to remember and gives search engines and AI assistants nothing distinctive to attach to
            the organization&apos;s name.
          </p>
          <p>
            The second common signal is drift. Colors, logos, and descriptions that were set once have since been
            approximated differently on each new flyer, slide deck, and social profile, so the organization presents four
            slightly different versions of itself depending on where someone finds it. That inconsistency undermines
            trust with donors and customers, and it weakens the entity signals that AI assistants rely on to verify who
            an organization is. Either signal is worth acting on before a website rebuild rather than after, since the
            site ends up designed around whatever identity is in place at the time.
          </p>
        </div>
      </Section>

      {/* ── With a website ── */}
      <Section heading="Can brand identity and a website be built at the same time?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Yes, and that is the most common way VersaSolve Consulting runs the work. Building the identity and the
            website together means the logo, palette, typography, and messaging are settled before the site is designed
            around them, rather than a finished site being retrofitted to a brand that arrives later.
          </p>
          <p>
            The New American Association of Massachusetts engagement is an example of that combined approach: VersaSolve
            Consulting delivered both the brand identity and the website for an organization serving refugees and
            immigrants. Running the two together also avoids paying twice for the same decisions, since the messaging
            work that defines how an organization describes itself is the same work that produces the site&apos;s core
            copy. The work can also be delivered on its own for organizations whose website is already working.
          </p>
        </div>
      </Section>

      {/* ── Work ── */}
      <Section
        heading="Which organizations has VersaSolve built brand identity for?"
        intro={
          <p>
            The projects below are live client work with a working site owned by the client. VersaSolve Consulting does
            not publish client counts, contract values, or delivery metrics.
          </p>
        }
      >
        <DataTable
          caption="VersaSolve identity client work"
          columns={['Organization', 'Sector', 'What VersaSolve Consulting built']}
          rows={work}
        />
        <p className="mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed text-deep-soft">
          Projects are scoped per organization, so pricing is set during the free 15-minute consultation
          rather than published as a tier. Website builds, which have published starting prices, are covered on the{' '}
          <Link
            href="/services/web-design"
            className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
          >
            website design and build
          </Link>{' '}
          page.
        </p>
      </Section>

      <CtaBand
        heading={
          <>
            Look like the organization <span className="text-gradient-warm">you actually are</span>
          </>
        }
        body="Book a free 15-minute consultation to talk through where your current identity is inconsistent and what a rebuild would involve. No commitment."
      />
    </main>
  )
}
