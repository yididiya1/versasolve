import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/page/PageHero'
import Section from '@/components/page/Section'
import DataTable from '@/components/page/DataTable'
import CtaBand from '@/components/page/CtaBand'
import { SITE, FOUNDER, breadcrumbList } from '@/lib/siteData'

const DESC =
  'VersaSolve Consulting LLC: Portland, Maine web design, branding, and AI-search visibility for mission-driven organizations. Founder-led, serving nonprofits and businesses across Maine and Massachusetts.'

export const metadata: Metadata = {
  title: 'About VersaSolve Consulting',
  description: DESC,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    title: 'About VersaSolve Consulting · Portland, Maine',
    description: DESC,
    url: `${SITE.url}/about`,
  },
}

const differentiators = [
  {
    n: '01',
    h: 'Build-and-maintain, not build-and-vanish',
    p: 'Every VersaSolve project has a defined ongoing care path, so the site keeps working after launch instead of quietly decaying.',
  },
  {
    n: '02',
    h: 'AI-search visibility built in from day one',
    p: 'SEO, AEO, and GEO are part of the standard build on every project, not a later upsell.',
  },
  {
    n: '03',
    h: 'Founder-led delivery',
    p: 'One accountable person on every project: no account-manager relay, no offshore handoff.',
  },
  {
    n: '04',
    h: 'Organizational strategy background',
    p: 'A master’s in Leadership and Organizational Studies means engagements start with how the organization actually operates, not just how the site looks.',
  },
  {
    n: '05',
    h: 'Modern performance stack',
    p: 'Built on a current static-first architecture rather than bloated page-builder templates, for faster load times and better search performance.',
  },
]

const audiences: React.ReactNode[][] = [
  ['Nonprofits', 'Primary', 'Amplify your mission and earn donor trust.'],
  ['Community organizations', 'Primary', 'Engage and grow the people you serve.'],
  ['Social enterprises', 'Primary', 'Align your purpose with your presence.'],
  ['Small businesses', 'Secondary', 'Stand out and convert with confidence.'],
  ['Startups', 'Secondary', 'Launch credible from day one.'],
  [
    'Real estate',
    'Strategic',
    'Agents, agent teams, boutique brokerages, and property management companies across Maine and Massachusetts.',
  ],
]

const credentials: React.ReactNode[][] = [
  ['BS, Health Sciences, with minors in Psychology and Holistic Health (2022)', 'University of Southern Maine'],
  ['MA, Leadership and Organizational Studies (2023)', 'University of Southern Maine'],
  ['Study abroad', 'University of Winchester, England'],
  ['Annual speaker, Loan Executive Program', 'United Way'],
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
  [
    'Everwell Allyship',
    'Healthcare nonprofit',
    'Website for a healthcare allyship expanding access to care and health education (everwellallyship.com)',
  ],
  [
    'USM Recovery Oriented Campus Center',
    'Higher-ed nonprofit · Portland, ME',
    'Multi-year digital partnership: website, digital marketing, and student training',
  ],
  [
    'Kennedy Park FC',
    'Community sports nonprofit · Portland, ME',
    'Full website design and build (kennedyparkfc.com)',
  ],
  ['coworkHERS', 'Small business', 'Website review and SEO improvements (coworkhers.com)'],
]

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList([
        { name: 'Home', path: '' },
        { name: 'About', path: '/about' },
      ]),
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        eyebrow="About · VersaSolve Consulting"
        title={
          <>
            About <span className="text-gradient-warm">VersaSolve Consulting</span>
          </>
        }
        lead={
          <>
            VersaSolve Consulting LLC is a Portland, Maine consultancy providing web design, branding, and AI-search
            visibility for mission-driven organizations. Founded and led by Abedom Gebreyesus, it builds websites, brand
            identity, and video for nonprofits and growing businesses across Maine and Massachusetts, then maintains
            them through ongoing monthly care instead of handing off and vanishing.
          </>
        }
        secondary={{ label: 'See the services', href: '/services/web-design' }}
      />

      {/* ── Founder ── */}
      <Section heading="Who founded VersaSolve Consulting?" tone="soft" width="narrow">
        <div className="glass-card rounded-2xl p-7 md:p-9">
          <div className="font-mono text-[10px] uppercase tracking-[2px] text-deep-mute mb-2">Founder &amp; CEO</div>
          <div className="font-display italic font-semibold text-deep text-[26px] leading-tight mb-5">
            {FOUNDER.name}
          </div>
          <div className="space-y-5 font-body text-[16px] leading-relaxed text-deep-soft">
            <p>
              Abedom Gebreyesus is the Founder and CEO of VersaSolve Consulting LLC. His journey began
              across Ethiopia, Eritrea, and Kenya before bringing him to the United States, where he spent his formative
              years in Massachusetts before making his home in Maine.
            </p>
            <p>
              Abedom earned a Bachelor of Science in Health Sciences with minors in Psychology and Holistic Health (2022)
              and a Master of Arts in Leadership and Organizational Studies (2023) from the University of Southern Maine.
              His passion for learning and cultural understanding has taken him across five continents (Africa, Asia,
              Europe, North America, and South America), including a study abroad experience at the University of
              Winchester in England. These experiences have shaped his belief that meaningful growth happens when
              strategy, innovation, and human connection come together. Through VersaSolve, he helps organizations build
              stronger digital foundations that support long-term growth, visibility, and impact.
            </p>
          </div>
          <a
            href={FOUNDER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.5px] text-gold-dark no-underline"
          >
            Connect on LinkedIn
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7h10M8 3.5 11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Section>

      {/* ── Differentiation ── */}
      <Section
        heading="What makes VersaSolve Consulting different?"
        intro={
          <p>
            Five things separate VersaSolve Consulting from a typical web design shop. Each one is a standing commitment
            on every engagement, not an add-on quoted separately.
          </p>
        }
        width="narrow"
      >
        <div className="space-y-4">
          {differentiators.map((d) => (
            <div key={d.n} className="glass-card flex gap-5 rounded-2xl p-6 md:p-7">
              <span className="font-display italic font-bold text-gradient-warm text-[30px] leading-none shrink-0 w-12">
                {d.n}
              </span>
              <div>
                <h3 className="font-display italic font-semibold text-deep text-[19px] leading-tight mb-2">{d.h}</h3>
                <p className="font-body text-[14.5px] leading-relaxed text-deep-soft">{d.p}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Who we serve ── */}
      <Section
        heading="Who does VersaSolve Consulting work with?"
        tone="soft"
        intro={
          <p>
            VersaSolve Consulting works with three clusters of clients. Mission-driven organizations are the primary
            focus and the largest share of completed work; small business and startup work is secondary; real estate is
            a strategic area where the approach is defined but the client roster is still being built.
          </p>
        }
      >
        <DataTable
          caption="Client types served by VersaSolve"
          columns={['Client type', 'Focus', 'What VersaSolve helps them do']}
          rows={audiences}
          minWidth={640}
        />
      </Section>

      {/* ── The problem ── */}
      <Section heading="What problem do clients arrive with?" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            Most organizations reach VersaSolve Consulting with the same three problems at once: a website that is
            outdated or identical to a template thousands of other groups are using, no visibility in AI-powered search,
            and no one who has maintained any of it since the day it launched.
          </p>
          <p>
            Those three problems compound. A template site gives search engines and AI assistants nothing distinctive to
            verify, so the organization does not surface in the searches where people are deciding who to contact. And
            because nobody owns the site after launch, the content drifts out of date, which erodes whatever visibility
            did exist. VersaSolve treats all three as one engagement: rebuild the foundation, structure it so
            machines can read it, then keep it current through an ongoing{' '}
            <Link
              href="/services/versacare"
              className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2"
            >
              VersaCare
            </Link>{' '}
            plan. All three problems usually trace back to one root cause: nobody was ever assigned ownership of the
            organization&apos;s digital presence after the site went live.
          </p>
        </div>
      </Section>

      {/* ── Service area ── */}
      <Section heading="Where does VersaSolve Consulting work?" tone="soft" width="narrow">
        <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
          <p>
            VersaSolve Consulting is based in Portland, Maine, and works with clients throughout Maine and
            Massachusetts. Two areas anchor the practice because that is where ongoing client work exists: Cumberland
            County, Maine, covering Portland and Greater Portland, and Essex County, Massachusetts, covering Lynn and the
            Greater Boston area. The practice is a service-area business and does not publish a street address.
          </p>
          <p>
            Projects run remotely through video calls, email, and shared documents, which is how most engagements are
            handled from first consultation through launch. In-person meetings are available in both the Portland and
            Greater Boston areas when a project calls for them. VersaSolve does not publish separate landing
            pages for towns or counties where it has no client work, because thin geographic pages read as doorway pages and get
            demoted. A new location earns its own page when a real case study supports it.
          </p>
        </div>
      </Section>

      {/* ── Credentials ── */}
      <Section
        heading="What credentials does VersaSolve Consulting hold?"
        intro={
          <p>
            VersaSolve Consulting is founder-led, so its credentials are Abedom Gebreyesus’s credentials. Listed below
            are the verified ones. VersaSolve claims no certifications, partnerships, or awards beyond this
            list.
          </p>
        }
        width="narrow"
      >
        <DataTable
          caption="Verified credentials held by the founder of VersaSolve Consulting"
          columns={['Credential', 'Institution']}
          rows={credentials}
          minWidth={520}
        />
      </Section>

      {/* ── Work ── */}
      <Section
        heading="Which organizations has VersaSolve Consulting worked with?"
        tone="soft"
        intro={
          <p>
            The organizations below are live client projects, each with a working site owned by the client. VersaSolve
            Consulting does not publish client counts, contract values, or delivery metrics.
          </p>
        }
      >
        <DataTable
          caption="Featured VersaSolve client work"
          columns={['Organization', 'Sector', 'What VersaSolve built']}
          rows={work}
        />

        <figure className="glass-card mt-8 rounded-2xl p-7 md:p-8">
          <blockquote className="font-display italic text-[19px] md:text-[21px] leading-snug text-deep">
            “We have seen a significant jump in our digital footprint through website enhancements and digital marketing
            by over 300 percent.”
          </blockquote>
          <figcaption className="mt-4 font-body text-[14px] text-deep-mute">
            <span className="font-semibold text-deep">Christopher Corson</span> · Program Coordinator, Recovery Oriented
            Campus Center (USM ROCC)
          </figcaption>
        </figure>
      </Section>

      <CtaBand
        heading={
          <>
            Let’s build a stronger <span className="text-gradient-warm">digital foundation</span>
          </>
        }
        body="Book a free 15-minute consultation to talk through where your organization stands today and what it would take to be found. No commitment."
      />
    </main>
  )
}
