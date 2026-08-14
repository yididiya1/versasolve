import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable from '@/components/page/DataTable'
import CtaBand from '@/components/page/CtaBand'
import { SITE, breadcrumbList, serviceSchema } from '@/lib/siteData'

const DESC =
  'SEO, AEO, and GEO services for New England organizations: rank in Google, win featured snippets, and get cited by ChatGPT, Claude, and Perplexity. Built into every VersaSolve Consulting website from day one.'

export const metadata: Metadata = {
  title: 'SEO, AEO & GEO Services',
  description: DESC,
  alternates: { canonical: '/services/seo-aeo-geo' },
  openGraph: {
    type: 'website',
    title: 'SEO, AEO & GEO Services · VersaSolve Consulting',
    description: DESC,
    url: `${SITE.url}/services/seo-aeo-geo`,
  },
}

const comparison: React.ReactNode[][] = [
  ['What it optimizes', 'Ranking in the results list', 'Being the extracted answer', 'Being cited by AI assistants'],
  [
    'Where it shows up',
    'Google and Bing results',
    'Snippets, answer boxes, People Also Ask',
    'ChatGPT, Claude, Perplexity, AI Overviews',
  ],
  [
    'You win it with',
    'Keywords, links, authority',
    'Direct answers plus structured Q&A',
    'Entity data plus corroborating mentions',
  ],
  ['The question it answers', '“Where do I rank?”', '“Am I the answer?”', '“Does the AI even know I exist?”'],
]

const pricing: React.ReactNode[][] = [
  ['Visibility Launch Bundle', 'One-time build', 'From $1,950', 'A website built with SEO, AEO, and GEO from day one'],
  [
    'VersaCare Elite',
    'Monthly retainer',
    'From $900 / month',
    'Ongoing SEO, GEO, and AEO management plus a monthly performance dashboard',
  ],
]

export default function SeoAeoGeoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      serviceSchema('visibility', {
        serviceType: 'Search engine, answer engine, and generative engine optimization',
        alternateName: ['SEO services', 'AEO services', 'GEO services'],
      }),
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'SEO, AEO & GEO', path: '/services/seo-aeo-geo' },
      ]),
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="Service · Visibility (SEO, AEO & GEO)"
        title={
          <>
            SEO, AEO &amp; <span className="text-gradient-warm">GEO services</span>
          </>
        }
        lead={
          <>
            Visibility work at VersaSolve Consulting covers three surfaces at once: SEO for ranking in Google&apos;s
            results, AEO for being lifted into featured snippets and answer boxes, and GEO for being cited by AI
            assistants like ChatGPT, Claude, and Perplexity. All three are built into every VersaSolve Consulting
            website from day one rather than sold as a later upsell.
          </>
        }
        secondary={{ label: 'Read the full guide', href: '/ai-search-visibility' }}
      />

      {/* ── Comparison ── */}
      <Section
        heading="What is the difference between SEO, AEO, and GEO?"
        tone="soft"
        intro={
          <p>
            SEO, AEO, and GEO optimize three different surfaces and are won in three different ways. They overlap, but
            each answers a distinct question about how visible an organization actually is.
          </p>
        }
      >
        <DataTable
          caption="SEO, AEO, and GEO compared"
          columns={['', 'SEO', 'AEO', 'GEO']}
          rows={comparison}
          minWidth={760}
        />
        <p className="mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed text-deep-soft">
          For the long-form explanation of how each surface works and how they interact, read the{' '}
          <Link
            href="/ai-search-visibility"
            className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
          >
            AI search visibility guide
          </Link>
          . This page covers the service itself: what VersaSolve Consulting does, what it costs, and who it is for.
        </p>
      </Section>

      {/* ── How citation works ── */}
      <Section heading="How do you get a business cited by ChatGPT, Claude, or Perplexity?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Getting cited takes two things working together. The first is structured, machine-readable data on the
            organization&apos;s own site: schema markup, clear entity information, and direct answers to the real
            questions people ask. The second is corroborating signals off that site: consistent business listings,
            reviews, and third-party mentions that say the same thing.
          </p>
          <p>
            AI assistants cite sources they can verify from more than one direction, which is why schema markup alone is
            not enough. A site can describe itself perfectly and still be left out of an answer if nothing external
            confirms the description. Contradictions are worse than gaps: when an organization&apos;s name, location, or
            services differ between its website and its listings, assistants tend to drop it rather than guess which
            version is right. That is why VersaSolve Consulting treats on-site schema, business listings, and third-party
            profiles as one job rather than three separate ones.
          </p>
        </div>
      </Section>

      {/* ── Pricing ── */}
      <Section
        heading="How much do SEO, AEO, and GEO services cost?"
        tone="soft"
        intro={
          <p>
            VersaSolve Consulting offers visibility work in two forms: as part of a website build, or as ongoing monthly
            management. Both starting prices are listed below.
          </p>
        }
      >
        <DataTable
          caption="Starting prices for VersaSolve Consulting visibility services"
          columns={['Option', 'Type', 'Starting price', 'What it covers']}
          rows={pricing}
          minWidth={760}
        />
        <p className="mt-6 max-w-2xl font-body text-[15.5px] leading-relaxed text-deep-soft">
          Basic SEO, AEO, and GEO structure is included in every VersaSolve Consulting website at no separate charge, at
          every build tier. The two options above are for organizations that want visibility treated as the primary goal
          of the build, or that want it actively managed month over month through{' '}
          <Link
            href="/services/versacare"
            className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
          >
            VersaCare
          </Link>
          .
        </p>
      </Section>

      {/* ── Why it matters ── */}
      <Section heading="Why does AI-search visibility matter now?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            People increasingly begin research inside an AI assistant rather than a search box. When someone asks
            ChatGPT or Perplexity to recommend a web designer, a nonprofit consultant, or a service nearby, the
            assistant answers with the handful of organizations it can verify and quietly omits everyone it cannot.
          </p>
          <p>
            That is the shift worth understanding. Being unranked used to mean landing on page two of Google, where a
            determined visitor could still find you. Being unverifiable means being left out of the answer entirely, at
            the exact moment someone is deciding who to contact. An organization with clear entity data and corroborating
            signals gets named in that answer. An organization without them does not exist to the model at all. The
            practical consequence is that visibility work now has to cover traditional search and AI assistants at the
            same time, because optimizing only for Google leaves the faster-growing surface unaddressed.
          </p>
        </div>
      </Section>

      {/* ── Who it's for ── */}
      <Section heading="Who are VersaSolve visibility services for?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            VersaSolve Consulting&apos;s visibility work is built for nonprofits, community organizations, social
            enterprises, small businesses, and startups across Maine and Massachusetts, organizations that need to be
            found by people searching for what they do, and that do not have an in-house marketing team to handle it.
          </p>
          <p>
            The work suits two situations in particular. The first is an organization launching or rebuilding a website,
            where structuring for AI search during the build costs far less than retrofitting it afterward. The second is
            an organization with a functioning site that simply never appears in AI-assistant answers, where the gap is
            usually missing entity data and thin corroboration rather than the design itself. Both situations are handled
            the same way (structured entity data on the site, answer-first content, and corroborating signals off it),
            but the second usually moves faster, because the site itself does not need rebuilding first.
          </p>
        </div>
      </Section>

      <CtaBand
        heading={
          <>
            Want to be found in <span className="text-gradient-warm">AI search</span>?
          </>
        }
        body="Book a free 15-minute consultation. We'll look at where you show up today across Google and the AI assistants, and map the fastest path to getting cited."
      />
    </main>
  )
}
