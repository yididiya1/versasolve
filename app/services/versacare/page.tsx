import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable, { Yes, No } from '@/components/page/DataTable'
import CtaBand from '@/components/page/CtaBand'
import { SITE, breadcrumbList, serviceSchema } from '@/lib/siteData'

const DESC =
  'VersaCare is VersaSolve Consulting’s monthly digital care retainer. Premium from $450/month covers hosting oversight, security updates, backups, and content edits. Elite from $900/month adds SEO, GEO, and AEO management.'

export const metadata: Metadata = {
  title: 'VersaCare — Monthly Digital Care',
  description: DESC,
  alternates: { canonical: '/services/versacare' },
  openGraph: {
    type: 'website',
    title: 'VersaCare — Monthly Digital Care · VersaSolve Consulting',
    description: DESC,
    url: `${SITE.url}/services/versacare`,
  },
}

const tiers: React.ReactNode[][] = [
  ['Hosting oversight', <Yes key="a" />, <Yes key="b" />],
  ['Security and software updates', <Yes key="a" />, <Yes key="b" />],
  ['Backups', <Yes key="a" />, <Yes key="b" />],
  ['Monthly allowance of content edits and fixes', <Yes key="a" />, <Yes key="b" />],
  ['Active SEO, GEO, and AEO management', <No key="a" />, <Yes key="b" />],
  ['Monthly performance dashboard', <No key="a" />, <Yes key="b" />],
]

const pricing: React.ReactNode[][] = [
  ['VersaCare Premium', 'From $450 / month', 'Keeping a working site secure, current, and backed up'],
  ['VersaCare Elite', 'From $900 / month', 'Everything in Premium, plus actively growing search and AI visibility'],
]

export default function VersaCarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema('versacare', {
        serviceType: 'Website maintenance and digital care retainer',
        alternateName: 'VersaCare',
      }),
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'VersaCare', path: '/services/versacare' },
      ]),
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service · VersaCare Monthly Digital Care"
        title={
          <>
            VersaCare — <span className="text-gradient-warm">monthly digital care</span>
          </>
        }
        lead={
          <>
            VersaCare is VersaSolve Consulting&apos;s monthly digital care retainer — an ongoing plan that keeps a
            website secure, current, and improving instead of quietly decaying after launch. Two tiers are available:
            Premium, starting at $450 per month, covers hosting oversight, security and software updates, backups, and
            content edits. Elite, starting at $900 per month, adds active SEO, GEO, and AEO management.
          </>
        }
        secondary={{ label: 'See website builds', href: '/services/web-design' }}
      />

      {/* ── Tier comparison ── */}
      <Section
        heading="What is included in each VersaCare tier?"
        tone="soft"
        intro={
          <p>
            VersaCare comes in two tiers. Premium keeps a website safe and current. Elite includes everything in Premium
            and adds the growth work that makes a site more visible over time.
          </p>
        }
      >
        <DataTable
          caption="VersaCare Premium and Elite compared"
          columns={['What is covered', 'Premium', 'Elite']}
          rows={tiers}
          minWidth={640}
        />
      </Section>

      {/* ── Pricing ── */}
      <Section
        heading="How much does VersaCare cost?"
        intro={
          <p>
            VersaCare monthly plans start at the figures below. Both are ongoing monthly retainers rather than one-time
            fees, and each is a starting price — final scope is set during the free 15-minute consultation.
          </p>
        }
      >
        <DataTable
          caption="VersaCare starting prices"
          columns={['Plan', 'Starting price', 'Best for']}
          rows={pricing}
          minWidth={640}
        />
      </Section>

      {/* ── Why maintenance ── */}
      <Section heading="Why does a website need ongoing maintenance?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            A website is not a finished object. Software dependencies need security patches, hosting configurations
            change, and content goes out of date as programs, staff, and services change. Left alone, a site that
            launched in good shape becomes slower, less accurate, and eventually less secure — usually without anyone
            noticing until something breaks.
          </p>
          <p>
            Search visibility decays the same way. AI assistants re-check the sources they cite, and content that has
            gone stale or started contradicting an organization&apos;s other listings quietly loses those citations.
            Visibility in AI-powered search is a system that has to be maintained, not a setup task that stays done. That
            is the reason every VersaSolve Consulting project has a defined care path attached rather than ending at
            handoff. The cost of neglect is rarely visible at the moment it accrues, which is exactly what makes it easy
            to defer until something has already broken.
          </p>
        </div>
      </Section>

      {/* ── Which tier ── */}
      <Section heading="Which VersaCare tier is right for my organization?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            VersaCare Premium fits organizations whose website is already doing its job and mainly needs to be kept
            working. The tier covers hosting oversight, security and software updates, backups, and a monthly allowance
            of content edits and fixes, which is enough for a site whose content changes occasionally rather than
            constantly.
          </p>
          <p>
            VersaCare Elite fits organizations that want the site to gain ground rather than hold steady. Elite includes
            everything in Premium and adds active SEO, GEO, and AEO management plus a monthly performance dashboard, so
            search and AI-assistant visibility is worked on every month and reported rather than assumed. Elite is the
            better fit when an organization is competing for attention, launching new programs, or currently invisible in{' '}
            <Link
              href="/services/seo-aeo-geo"
              className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
            >
              AI-powered search
            </Link>
            . Both tiers are ongoing monthly retainers rather than blocks of hours, so a site gets continuous coverage
            instead of attention only when something visibly breaks.
          </p>
        </div>
      </Section>

      {/* ── After launch ── */}
      <Section heading="Does every VersaSolve project include VersaCare?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Every VersaSolve Consulting website project routes into an ongoing VersaCare care path after launch. That is
            the deliberate difference between VersaSolve Consulting and a build-and-vanish engagement: the site has a
            named owner responsible for it after the launch date, not just before it.
          </p>
          <p>
            VersaCare is also available for websites VersaSolve Consulting did not build. Organizations that inherited a
            site from a previous agency or volunteer, and now have no one maintaining it, are a common starting point.
            The free 15-minute consultation covers what condition the existing site is in and which tier matches it. A
            new{' '}
            <Link
              href="/services/web-design"
              className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
            >
              website build
            </Link>{' '}
            is only worth discussing when the existing foundation genuinely cannot be maintained. The care path is
            defined as part of the original project scope rather than negotiated after launch, which is what makes it a
            commitment rather than an upsell.
          </p>
        </div>
      </Section>

      <CtaBand
        heading={
          <>
            Stop letting your site <span className="text-gradient-warm">quietly decay</span>
          </>
        }
        body="Book a free 15-minute consultation to review what shape your current site is in and which VersaCare tier fits. No commitment."
      />
    </main>
  )
}
