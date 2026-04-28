import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impact-Driven Solutions — VersaSolve Consulting',
  description:
    'Community Project Excellence and Strategic Grant Writing to help businesses and nonprofits build meaningful connections and secure the funding they need to thrive.',
}

const subServices = [
  {
    num: '01',
    symbol: '◉',
    name: 'Community Project Excellence',
    desc: 'Helping businesses and nonprofits bring people together through well-executed initiatives that foster engagement and drive real community impact. We guide your project from concept to completion.',
    deliverables: ['Project scoping & planning', 'Community engagement strategy', 'Stakeholder coordination', 'Impact measurement'],
  },
  {
    num: '02',
    symbol: '◈',
    name: 'Strategic Grant Writing',
    desc: 'Assisting organizations in securing funding through compelling grant proposals that align with their mission and goals — maximizing your chances of success and helping you do the work that matters.',
    deliverables: ['Funding opportunity research', 'Proposal writing & editing', 'Budget narrative development', 'Submission support'],
  },
] as const

const audiences = [
  {
    title: 'Nonprofits',
    desc: 'We help nonprofits amplify their mission through strategic grant writing and community programming that resonates with donors, funders, and the communities you serve.',
    symbol: '◉',
  },
  {
    title: 'Small Businesses',
    desc: 'Build authentic community roots that differentiate your brand, create loyal customers, and position your business as a genuine stakeholder in your local ecosystem.',
    symbol: '◈',
  },
  {
    title: 'Startups',
    desc: 'Secure early-stage funding and build community credibility from day one — laying the groundwork for long-term growth and meaningful industry presence.',
    symbol: '◆',
  },
] as const

const benefits = [
  { icon: '◎', title: 'Deeper Community Ties', desc: 'Genuine community connections that go beyond marketing — building the trust and loyalty that sustains organizations for decades.' },
  { icon: '◈', title: 'Secured Funding', desc: 'Compelling grant proposals crafted to align perfectly with funders\' priorities, increasing your award rate and financial sustainability.' },
  { icon: '◉', title: 'Measurable Impact', desc: 'Every initiative is designed with clear outcomes. We help you track, document, and communicate your impact to stakeholders and funders.' },
] as const

export default function ImpactDrivenPage() {
  return (
    <main className="bg-ink text-cream">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden pt-[76px]">
        {/* Background — rust-tinted for differentiation from Digital Branding page */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-20 w-[580px] h-[580px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(191,94,58,0.16) 0%, transparent 65%)', filter: 'blur(80px)' }}
          />
          <div
            className="absolute bottom-0 -left-20 w-[440px] h-[440px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.09) 0%, transparent 65%)', filter: 'blur(90px)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(191,94,58,0.5) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
              opacity: 0.022,
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 30%, rgba(13,10,6,0.9) 100%)' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-14 xl:px-24 py-20 max-w-[1400px] mx-auto w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="font-mono text-[10.5px] tracking-[2px] uppercase text-warm/50 hover:text-warm transition-colors no-underline">
              Home
            </Link>
            <span className="text-warm/30 text-[10px]">◆</span>
            <span className="font-mono text-[10.5px] tracking-[2px] uppercase text-rust/70">
              Impact-Driven Solutions
            </span>
          </div>

          <p className="font-mono text-[11px] tracking-[3px] uppercase text-rust flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-rust" />
            Service 02
          </p>

          <h1
            className="font-display italic font-semibold text-cream leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
          >
            Impact-Driven<br />
            <span className="text-rust">Solutions</span>
          </h1>

          <p className="font-body text-[17px] leading-relaxed text-warm max-w-[520px] mb-10">
            We help businesses and nonprofits build real community connections through
            well-executed initiatives that foster engagement and drive measurable impact —
            and we help you secure the funding to make it all possible.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-ink font-body font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
              style={{ background: 'linear-gradient(135deg, #bf5e3a, #d07558)', boxShadow: '0 4px 20px rgba(191,94,58,0.3)' }}
            >
              Drive Your Impact
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-cream/12 text-cream font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-cream/5 transition-all duration-200 no-underline"
            >
              Schedule Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sub-services ─────────────────────────────────────────── */}
      <section className="bg-ink-surface py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-rust flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-rust" />
            What&apos;s Included
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            Two Ways We Drive<br />Lasting Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((s, i) => (
              <div
                key={s.num}
                className={`reveal reveal-d${i + 1} group relative bg-ink-card border border-rust/10 rounded-2xl p-8 xl:p-10 hover:border-rust/28 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="absolute top-4 right-5 font-display italic font-bold text-rust/[0.04] select-none pointer-events-none leading-none" style={{ fontSize: '7rem' }}>
                  {s.num}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-lg text-rust/60">{s.symbol}</span>
                    <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-rust/50">{s.num}</span>
                  </div>
                  <h3
                    className="font-display italic font-semibold text-cream mb-3 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-warm mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-warm/60">
                        <span className="w-1 h-1 rounded-full bg-rust/50 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────── */}
      <section className="bg-ink py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-rust flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-rust" />
            Who It&apos;s For
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            Built for Organizations<br />That Want to Do More
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div
                key={a.title}
                className={`reveal reveal-d${i + 1} bg-ink-card border border-rust/10 rounded-2xl p-8 hover:border-rust/25 transition-all duration-300`}
              >
                <span className="block text-3xl text-rust/50 mb-5">{a.symbol}</span>
                <h3 className="font-display italic font-semibold text-[22px] text-cream mb-3 tracking-tight">{a.title}</h3>
                <p className="font-body text-[15px] leading-relaxed text-warm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="bg-ink-surface py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-rust flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-rust" />
            Why It Matters
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            The Power of<br />Community-Driven Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-d${i + 1} bg-ink-card border border-rust/10 rounded-2xl p-8 hover:border-rust/25 transition-all duration-300`}
              >
                <span className="block text-3xl text-rust/50 mb-5">{b.icon}</span>
                <h3 className="font-display italic font-semibold text-[22px] text-cream mb-3 tracking-tight">{b.title}</h3>
                <p className="font-body text-[15px] leading-relaxed text-warm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-ink py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="reveal rounded-2xl px-8 md:px-16 py-14 md:py-20 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(191,94,58,0.1) 0%, rgba(29,24,16,1) 60%)',
              border: '1px solid rgba(191,94,58,0.18)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(191,94,58,0.08) 0%, transparent 65%)' }}
            />
            <p className="relative font-mono text-[11px] tracking-[3px] uppercase text-rust mb-4">
              Ready to Make an Impact?
            </p>
            <h2
              className="relative font-display italic font-semibold text-cream leading-[0.97] tracking-tight mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
            >
              Let&apos;s Build Something<br /><span className="text-rust">That Lasts</span>
            </h2>
            <p className="relative font-body text-[16px] text-warm max-w-lg mx-auto mb-10">
              Whether you&apos;re launching a community initiative or applying for your first grant, we&apos;re here to help you do it right.
            </p>
            <div className="relative flex gap-3 justify-center flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-ink font-body font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                style={{ background: 'linear-gradient(135deg, #bf5e3a, #d07558)', boxShadow: '0 4px 20px rgba(191,94,58,0.3)' }}
              >
                Start the Conversation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services/digital-branding"
                className="inline-flex items-center gap-2 border border-cream/12 text-cream font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-cream/5 transition-all duration-200 no-underline"
              >
                Explore Digital Branding
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
