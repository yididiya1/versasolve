import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, FOUNDER, BOOKING_URL } from '@/lib/siteData'

const PUBLISHED = '2026-07-27'
const TITLE = 'AI Search Visibility: How to Get Found in Google, ChatGPT, Claude & Perplexity'
const DESC =
  'A plain-English guide to SEO, AEO, and GEO — how to rank in Google, win featured snippets, and get cited by AI assistants like ChatGPT, Claude, and Perplexity. Written for New England organizations.'

export const metadata: Metadata = {
  title: 'AI Search Visibility (SEO, AEO & GEO) in New England',
  description: DESC,
  alternates: { canonical: '/ai-search-visibility' },
  openGraph: {
    type: 'article',
    title: TITLE,
    description: DESC,
    url: `${SITE.url}/ai-search-visibility`,
  },
}

const definitions = [
  {
    tag: 'SEO',
    name: 'Search Engine Optimization',
    color: '#2f6ea3',
    body: 'Getting ranked in the traditional list of blue links on Google and Bing. Won with relevant content, quality links, and a fast, well-structured site.',
  },
  {
    tag: 'AEO',
    name: 'Answer Engine Optimization',
    color: '#a06a1f',
    body: 'Structuring your content so search engines lift it directly into featured snippets, answer boxes, and “People Also Ask.” Won with direct, answer-first content and schema.',
  },
  {
    tag: 'GEO',
    name: 'Generative Engine Optimization',
    color: '#1f7a86',
    body: 'Making your business citable by AI assistants like ChatGPT, Claude, and Perplexity. Won with machine-readable entity data plus corroborating mentions across the web.',
  },
]

const comparison = [
  ['What it optimizes', 'Ranking in the results list', 'Being the extracted answer', 'Being cited by AI assistants'],
  ['Where it shows up', 'Google / Bing results', 'Snippets, answer boxes, PAA', 'ChatGPT, Claude, Perplexity, AI Overviews'],
  ['You win it with', 'Keywords, links, authority', 'Direct answers + structured Q&A', 'Entity data + corroborating mentions'],
  ['The question it answers', '“Where do I rank?”', '“Am I the answer?”', '“Does the AI even know I exist?”'],
]

const citeSteps = [
  {
    n: '01',
    h: 'Give machines your facts',
    p: 'Add structured data (schema) for your organization, people, services, and FAQs, plus clear, consistent entity information. This is how an AI verifies who you are, what you do, and who you serve.',
  },
  {
    n: '02',
    h: 'Answer real questions, directly',
    p: 'Write the exact questions your customers ask as headings, and lead each with a direct answer — no preamble. Answer-first content is what gets extracted into snippets and quoted by assistants.',
  },
  {
    n: '03',
    h: 'Build corroboration off-site',
    p: 'AI assistants cite sources they can verify from more than one direction: a consistent Google Business Profile, matching business listings, reviews, and third-party mentions. Schema on your own site is necessary but not sufficient.',
  },
  {
    n: '04',
    h: 'Stay consistent everywhere',
    p: 'Your name, location, services, and contact details must match across every profile. Contradictory information is the fastest way to get dropped from an answer.',
  },
  {
    n: '05',
    h: 'Maintain it',
    p: 'Assistants re-check their sources. Content that goes stale or starts to conflict quietly loses its citations. Visibility in AI search is a system you maintain, not a one-time setup.',
  },
]

export default function AiSearchVisibilityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE.url}/ai-search-visibility#article`,
        headline: TITLE,
        description: DESC,
        inLanguage: 'en-US',
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { '@id': `${SITE.url}/#abedom` },
        publisher: { '@id': `${SITE.url}/#organization` },
        isPartOf: { '@id': `${SITE.url}/#website` },
        mainEntityOfPage: `${SITE.url}/ai-search-visibility`,
        about: [
          'Answer Engine Optimization',
          'Generative Engine Optimization',
          'Search Engine Optimization',
        ],
        keywords: 'AEO, GEO, SEO, AI search visibility, how to rank in ChatGPT and Perplexity, New England',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'AI Search Visibility', item: `${SITE.url}/ai-search-visibility` },
        ],
      },
    ],
  }

  return (
    <main className="bg-page text-deep">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-page px-6 md:px-14 xl:px-24 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[360px] w-[680px] -translate-x-1/2"
            style={{ background: 'radial-gradient(ellipse, rgba(200,134,42,0.12) 0%, transparent 70%)' }} />
          <div className="grid-faint absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="eyebrow mb-6">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Guide · AI Search Visibility</span>
          </span>
          <h1 className="font-display italic font-semibold text-deep leading-[1.02] tracking-tight"
            style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}>
            How to get found in Google, <span className="text-gradient-warm">ChatGPT, Claude &amp; Perplexity</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-body text-[17px] md:text-[18.5px] leading-relaxed text-deep-soft">
            AI search visibility means being found in three places at once: Google’s traditional results (<b className="font-semibold text-deep">SEO</b>),
            the answer boxes above them (<b className="font-semibold text-deep">AEO</b>), and the AI assistants people now ask directly (<b className="font-semibold text-deep">GEO</b>).
            Most websites are built for the first and invisible in the other two. Here’s how all three work — and how to be cited in every one.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="btn-warm inline-flex items-center gap-2 rounded-[13px] px-7 py-[15px] text-base font-semibold no-underline">
              Book a free 15-min consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <Link href="/faq" className="inline-flex items-center gap-2 rounded-[13px] border border-edge bg-white/60 px-7 py-[15px] text-base font-semibold text-deep no-underline transition hover:bg-white">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ── Definitions ── */}
      <section className="relative overflow-hidden bg-page-soft px-6 md:px-14 xl:px-24 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0"><div className="grid-faint absolute inset-0" /></div>
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <h2 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            What are SEO, AEO, and GEO?
          </h2>
          <p className="max-w-2xl font-body text-[16px] leading-relaxed text-deep-soft mb-12">
            Three optimizations for three different surfaces. A modern site needs all three, because
            your customers no longer start their search in only one place.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {definitions.map((d) => (
              <div key={d.tag} className="glass-card rounded-2xl p-8">
                <div className="mb-4 inline-flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg font-mono text-[13px] font-bold text-white" style={{ background: d.color }}>
                    {d.tag[0]}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[2px]" style={{ color: d.color }}>{d.tag}</span>
                </div>
                <h3 className="font-display italic font-semibold text-deep text-[21px] leading-tight mb-3">{d.name}</h3>
                <p className="font-body text-[14.5px] leading-relaxed text-deep-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="relative bg-page px-6 md:px-14 xl:px-24 py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <h2 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            AEO vs SEO vs GEO: what’s the difference?
          </h2>
          <p className="max-w-2xl font-body text-[16px] leading-relaxed text-deep-soft mb-10">
            They overlap, but each answers a different question about how visible you are.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-edge">
            <table className="w-full min-w-[720px] border-collapse bg-white/60 text-left">
              <thead>
                <tr className="border-b border-edge">
                  <th className="p-4 md:p-5 font-mono text-[10.5px] uppercase tracking-[1.5px] text-deep-mute" />
                  <th className="p-4 md:p-5 font-display italic font-semibold text-[18px] text-deep" style={{ color: '#2f6ea3' }}>SEO</th>
                  <th className="p-4 md:p-5 font-display italic font-semibold text-[18px]" style={{ color: '#a06a1f' }}>AEO</th>
                  <th className="p-4 md:p-5 font-display italic font-semibold text-[18px]" style={{ color: '#1f7a86' }}>GEO</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-edge/70 last:border-0">
                    <td className="p-4 md:p-5 font-mono text-[10.5px] uppercase tracking-[1px] text-deep-mute align-top">{row[0]}</td>
                    <td className="p-4 md:p-5 font-body text-[14px] leading-relaxed text-deep-soft align-top">{row[1]}</td>
                    <td className="p-4 md:p-5 font-body text-[14px] leading-relaxed text-deep-soft align-top">{row[2]}</td>
                    <td className="p-4 md:p-5 font-body text-[14px] leading-relaxed text-deep-soft align-top">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── How to get cited ── */}
      <section className="relative overflow-hidden bg-page-soft px-6 md:px-14 xl:px-24 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0"><div className="grid-faint absolute inset-0" /></div>
        <div className="relative z-10 mx-auto max-w-[1000px]">
          <h2 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            How do you get cited by ChatGPT, Claude, or Perplexity?
          </h2>
          <p className="max-w-2xl font-body text-[16px] leading-relaxed text-deep-soft mb-12">
            It takes two things working together — structured data on your own site, and corroborating
            signals off it. AI assistants cite what they can verify from more than one direction. Here’s the sequence.
          </p>
          <div className="space-y-4">
            {citeSteps.map((s) => (
              <div key={s.n} className="glass-card flex gap-5 rounded-2xl p-6 md:p-7">
                <span className="font-display italic font-bold text-gradient-warm text-[30px] leading-none shrink-0 w-12">{s.n}</span>
                <div>
                  <h3 className="font-display italic font-semibold text-deep text-[19px] leading-tight mb-2">{s.h}</h3>
                  <p className="font-body text-[14.5px] leading-relaxed text-deep-soft">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it matters ── */}
      <section className="relative bg-page px-6 md:px-14 xl:px-24 py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-[900px]">
          <h2 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Why AI search visibility matters now
          </h2>
          <div className="space-y-5 font-body text-[16.5px] leading-relaxed text-deep-soft">
            <p>
              People increasingly begin their research inside an AI assistant instead of a search box.
              When someone asks ChatGPT or Perplexity to recommend a web designer, a nonprofit consultant,
              or a service near them, the assistant answers with the handful of businesses it can verify —
              and quietly leaves out everyone it can’t.
            </p>
            <p>
              That’s the shift: being <span className="font-semibold text-deep">unranked</span> used to mean being on page two.
              Now, being <span className="font-semibold text-deep">unverifiable</span> means being left out of the answer entirely —
              at the exact moment someone is deciding who to contact. A site with clear entity data and
              corroborating signals gets named. A site without them doesn’t exist to the model.
            </p>
          </div>
        </div>
      </section>

      {/* ── New England / VersaSolve approach ── */}
      <section className="relative overflow-hidden bg-page-soft px-6 md:px-14 xl:px-24 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0"><div className="grid-faint absolute inset-0" /></div>
        <div className="relative z-10 mx-auto max-w-[1000px]">
          <span className="eyebrow mb-5">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">AEO Services · New England</span>
          </span>
          <h2 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
            Built for AI search from day one
          </h2>
          <p className="max-w-2xl font-body text-[16.5px] leading-relaxed text-deep-soft mb-6">
            VersaSolve Consulting builds SEO, AEO, and GEO into every website from the start —
            not as a later upsell. For nonprofits, small businesses, and mission-driven organizations
            across <b className="font-semibold text-deep">Cumberland County, Maine</b> (Portland) and
            <b className="font-semibold text-deep"> Essex County, Massachusetts</b> (Lynn and Greater Boston),
            that means structured entity data, answer-first content, and a maintenance path that keeps
            you citable as the models keep changing.
          </p>
          <p className="max-w-2xl font-body text-[15.5px] leading-relaxed text-deep-mute">
            See the full{' '}
            <Link href="/#services" className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2">Visibility service</Link>{' '}
            and{' '}
            <Link href="/faq" className="font-semibold text-gold-dark underline decoration-gold-dark/30 underline-offset-2">frequently asked questions</Link>,
            or book a call below.
          </p>
        </div>
      </section>

      {/* ── Author byline (E-E-A-T) ── */}
      <section className="relative bg-page px-6 md:px-14 xl:px-24 py-16">
        <div className="relative z-10 mx-auto max-w-[900px]">
          <div className="glass-card rounded-2xl p-7 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[2px] text-deep-mute mb-2">Written by</div>
              <div className="font-display italic font-semibold text-deep text-[20px] leading-tight">{FOUNDER.name}</div>
              <div className="font-body text-[13px] text-deep-mute mb-3">{FOUNDER.jobTitle}, VersaSolve Consulting</div>
              <p className="font-body text-[14px] leading-relaxed text-deep-soft">{FOUNDER.shortBio}</p>
              <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.5px] text-gold-dark no-underline">
                Connect on LinkedIn
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="relative overflow-hidden px-6 md:px-14 xl:px-24 py-20 md:py-24"
        style={{ background: 'linear-gradient(180deg, #f4ecdb 0%, #faf5ec 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[560px] -translate-x-1/2 -translate-y-1/2 blur-2xl"
            style={{ background: 'radial-gradient(ellipse, rgba(212,149,58,0.16) 0%, transparent 62%)' }} />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display italic font-semibold text-deep leading-[1.02] tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Want to be found in <span className="text-gradient-warm">AI search</span>?
          </h2>
          <p className="mx-auto max-w-lg font-body text-[16.5px] leading-relaxed text-deep-soft mb-8">
            We’ll look at where you show up today across Google and the AI assistants, and map the
            fastest path to getting cited. Free, no commitment.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
            className="btn-warm inline-flex items-center gap-2 rounded-[13px] px-8 py-4 text-base font-semibold no-underline">
            Book a free 15-min consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
