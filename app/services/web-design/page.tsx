import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable from '@/components/page/DataTable'
import CtaBand from '@/components/page/CtaBand'
import { SITE, breadcrumbList, serviceSchema } from '@/lib/siteData'

const DESC =
  'VersaSolve Consulting LLC — website design and build for nonprofits, small businesses, and mission-driven organizations across Maine and Massachusetts. Fast, mobile-first sites from $900, launched in 5–10 business days with SEO, AEO, and GEO built in.'

export const metadata: Metadata = {
  title: 'Website Design & Build',
  description: DESC,
  alternates: { canonical: '/services/web-design' },
  openGraph: {
    type: 'website',
    title: 'Website Design & Build — VersaSolve Consulting',
    description: DESC,
    url: `${SITE.url}/services/web-design`,
  },
}

const pricing: React.ReactNode[][] = [
  ['Starter', 'From $900'],
  ['Growth', 'From $1,600'],
  ['Full build', 'From $3,000'],
  ['Visibility Launch Bundle', 'From $1,950'],
]

const timelines: React.ReactNode[][] = [
  ['Standard website build', '5–10 business days'],
  ['Scoped 4–5 page build', 'Same-day launch available'],
]

export default function WebDesignPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema('website', {
        serviceType: 'Website design and development',
        alternateName: 'Web design',
      }),
      // Two levels, not three: there is no /services index route, and a breadcrumb
      // item pointing at a URL that 404s is worse than a shorter trail.
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'Website Design & Build', path: '/services/web-design' },
      ]),
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service · Website Design & Build"
        title={
          <>
            Website <span className="text-gradient-warm">design &amp; build</span>
          </>
        }
        lead={
          <>
            VersaSolve Consulting designs and builds fast, mobile-first websites for nonprofits, small businesses, and
            mission-driven organizations across New England. Every build ships with SEO, AEO, and GEO structured in from
            day one, launches in five to ten business days, and routes into an ongoing VersaCare plan so the site keeps
            working long after launch.
          </>
        }
        secondary={{ label: 'See visibility services', href: '/services/seo-aeo-geo' }}
      />

      {/* ── Pricing ── */}
      <Section
        heading="How much does a website cost?"
        tone="soft"
        intro={
          <p>
            Website projects with VersaSolve Consulting start at the figures below. Each is a starting price for that
            build tier rather than a fixed quote, and final scope is set during the free 15-minute consultation.
          </p>
        }
      >
        <DataTable
          caption="VersaSolve Consulting website build starting prices"
          columns={['Build tier', 'Starting price']}
          rows={pricing}
          minWidth={420}
        />
        <p className="mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed text-deep-soft">
          The Visibility Launch Bundle is a website built with SEO, AEO, and GEO from day one, which is why it is priced
          as its own track rather than as an add-on to a build tier. Every website project, whichever tier it starts
          from, routes into an ongoing{' '}
          <Link
            href="/services/versacare"
            className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
          >
            VersaCare
          </Link>{' '}
          care path after launch.
        </p>
      </Section>

      {/* ── Timeline ── */}
      <Section
        heading="How long does it take to build a website?"
        intro={
          <p>
            Standard websites from VersaSolve Consulting launch in 5 to 10 business days. Timelines depend mainly on how
            quickly content and feedback come back from the client side, since the build pauses at each review point
            until a decision arrives.
          </p>
        }
      >
        <DataTable
          caption="VersaSolve Consulting website build timelines"
          columns={['Project type', 'Typical time to launch']}
          rows={timelines}
          minWidth={420}
        />
      </Section>

      {/* ── What's included ── */}
      <Section heading="What is included in a VersaSolve website build?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Every VersaSolve Consulting website is fast, mobile-first, and built on a modern static-first stack rather
            than a page-builder template. The design target is conversion, not decoration: the site is structured to turn
            visitors into real conversations — a booked call, a submitted form, a donation — instead of simply looking
            good on a portfolio screenshot.
          </p>
          <p>
            Search visibility is part of the standard build, not a later upsell. That means schema markup describing the
            organization, its people, and its services; content written so that answer engines can extract it directly;
            and the entity information AI assistants need in order to verify who the organization is. Each build then
            connects to a defined ongoing care path, so the site does not begin decaying the week after it launches. Each
            build is delivered by the founder rather than passed to a subcontractor, so one accountable person owns the
            result from first consultation through launch.
          </p>
        </div>
      </Section>

      {/* ── Why modern stack ── */}
      <Section heading="Why build on a modern stack instead of a page builder?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Page-builder templates carry the weight of every feature they might ever need, whether or not a given site
            uses them. That bloat shows up as slower load times, and load time is a ranking factor in traditional search
            as well as a direct cause of visitors leaving before a page finishes rendering.
          </p>
          <p>
            VersaSolve Consulting builds on a current static-first architecture instead. Pages are generated ahead of
            time and served as finished markup, which makes them fast to load and clean for crawlers and AI assistants to
            read. The practical difference is that the structure a search engine or answer engine sees is the same
            structure a visitor sees — nothing important is assembled by scripts after the page arrives. The same
            static-first approach is what makes VersaSolve Consulting builds mobile-first in practice rather than in
            name: pages that are light for crawlers are also light on a phone.
          </p>
        </div>
      </Section>

      {/* ── Who it's for ── */}
      <Section heading="Who is a VersaSolve website build for?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            VersaSolve Consulting builds websites primarily for nonprofits, community organizations, and social
            enterprises, and secondarily for small businesses and startups across Maine and Massachusetts. Completed
            client builds include Kennedy Park FC, a community sports nonprofit in Portland, Maine, and Everwell
            Allyship, a healthcare nonprofit expanding access to care and health education.
          </p>
          <p>
            The typical starting point is an organization whose current website is outdated or identical to a widely used
            template, that does not appear in AI-powered search, and that has had no one maintaining the site since it
            launched. A build is the right move when the existing foundation cannot support the organization&apos;s
            current work — not merely when the design feels dated. VersaSolve Consulting also builds for real estate
            agents, agent teams, boutique brokerages, and property management companies across Maine and Massachusetts,
            though that is a newer strategic area rather than an established client roster.
          </p>
        </div>
      </Section>

      <CtaBand
        heading={
          <>
            Ready to build a site that <span className="text-gradient-warm">gets found</span>?
          </>
        }
        body="Book a free 15-minute consultation. We'll look at your current site, where it shows up today, and what a rebuild would need to cover. No commitment."
      />
    </main>
  )
}
