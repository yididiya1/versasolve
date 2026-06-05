import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impact-Driven Solutions — VersaSolve Consulting',
  description:
    'Community Project Excellence and Strategic Grant Writing to help businesses and nonprofits build meaningful connections and secure the funding they need to thrive.',
}

const RUST = 'linear-gradient(135deg,#d07558 0%,#bf5e3a 55%,#8a3f22 100%)'

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

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Eyebrow({ label }: { label: string }) {
  return (
    <span className="eyebrow mb-4 reveal" style={{ borderColor: 'rgba(191,94,58,0.28)', background: 'rgba(191,94,58,0.07)' }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'linear-gradient(135deg,#d07558,#8a3f22)' }} />
      <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-rust-dark">{label}</span>
    </span>
  )
}

function Card({ symbol, num, title, desc, children, delay }: {
  symbol: string; num?: string; title: string; desc: string; children?: React.ReactNode; delay: number
}) {
  return (
    <div className={`reveal reveal-d${delay} glass-card card-lift group relative rounded-2xl p-8 overflow-hidden`}>
      {num && (
        <div className="absolute top-4 right-5 font-display italic font-bold text-rust/[0.13] select-none pointer-events-none leading-none" style={{ fontSize: '7rem' }}>
          {num}
        </div>
      )}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="grid h-10 w-10 place-items-center rounded-xl text-[17px] text-[#1A140D] shadow-[0_8px_20px_rgba(191,94,58,0.3)]" style={{ background: RUST }}>
            {symbol}
          </span>
          {num && <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-rust-dark/70">{num}</span>}
        </div>
        <h3 className="font-display italic font-semibold text-deep mb-3 leading-tight tracking-tight" style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}>
          {title}
        </h3>
        <p className="font-body text-[15px] leading-relaxed text-deep-soft">{desc}</p>
        {children}
      </div>
    </div>
  )
}

export default function ImpactDrivenPage() {
  return (
    <main className="bg-page text-deep">

      {/* ── Hero (dark) ───────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden pt-[76px] bg-ink">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-20 w-[580px] h-[580px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(191,94,58,0.2) 0%, transparent 65%)', filter: 'blur(80px)' }}
          />
          <div
            className="absolute bottom-0 -left-20 w-[440px] h-[440px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)', filter: 'blur(90px)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 35% 50%, black, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 70% 70% at 35% 50%, black, transparent 75%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 30%, rgba(13,10,6,0.9) 100%)' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-14 xl:px-24 py-20 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="font-mono text-[10.5px] tracking-[2px] uppercase text-warm/50 hover:text-warm transition-colors no-underline">
              Home
            </Link>
            <span className="text-warm/30 text-[10px]">◆</span>
            <span className="font-mono text-[10.5px] tracking-[2px] uppercase text-rust/70">
              Impact-Driven Solutions
            </span>
          </div>

          <span className="eyebrow mb-5" style={{ borderColor: 'rgba(191,94,58,0.25)', background: 'rgba(191,94,58,0.07)' }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'linear-gradient(135deg,#d07558,#8a3f22)' }} />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-rust">Service 02</span>
          </span>

          <h1
            className="font-display italic font-semibold text-cream leading-[0.9] tracking-tight mb-6 mt-5"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
          >
            Impact-Driven<br />
            <span className="text-gradient-rust">Solutions</span>
          </h1>

          <p className="font-body text-[17px] leading-relaxed text-warm max-w-[520px] mb-10">
            We help businesses and nonprofits build real community connections through
            well-executed initiatives that foster engagement and drive measurable impact —
            and we help you secure the funding to make it all possible.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-paper font-body font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
              style={{ background: RUST, boxShadow: '0 10px 28px rgba(191,94,58,0.32), inset 0 1px 0 rgba(255,255,255,0.25)' }}
            >
              Drive Your Impact
              <Arrow />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-cream/15 text-cream font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-cream/5 transition-all duration-200 no-underline"
            >
              Schedule Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sub-services (light) ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-page py-24 px-6 md:px-14 xl:px-24">
        <div className="grid-faint pointer-events-none absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <Eyebrow label="What's Included" />
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            Two Ways We Drive<br />Lasting <span className="text-gradient-rust">Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServices.map((s, i) => (
              <Card key={s.num} symbol={s.symbol} num={s.num} title={s.name} desc={s.desc} delay={i + 1}>
                <ul className="space-y-2 mt-6">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-deep-mute">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#d07558,#8a3f22)' }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for (light) ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-page-soft py-24 px-6 md:px-14 xl:px-24">
        <div className="grid-faint pointer-events-none absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <Eyebrow label="Who It's For" />
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            Built for Organizations<br />That Want to <span className="text-gradient-rust">Do More</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Card key={a.title} symbol={a.symbol} title={a.title} desc={a.desc} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits (light) ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-page py-24 px-6 md:px-14 xl:px-24">
        <div className="grid-faint pointer-events-none absolute inset-0" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <Eyebrow label="Why It Matters" />
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            The Power of<br />Community-Driven <span className="text-gradient-rust">Work</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Card key={b.title} symbol={b.icon} title={b.title} desc={b.desc} delay={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (light) ──────────────────────────────────────────── */}
      <section className="bg-page-soft py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal glass-card relative rounded-2xl px-8 md:px-16 py-14 md:py-20 text-center overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(191,94,58,0.14) 0%, transparent 65%)' }}
            />
            <p className="relative font-mono text-[11px] tracking-[3px] uppercase text-rust-dark mb-4">
              Ready to Make an Impact?
            </p>
            <h2
              className="relative font-display italic font-semibold text-deep leading-[0.97] tracking-tight mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
            >
              Let&apos;s Build Something<br /><span className="text-gradient-rust">That Lasts</span>
            </h2>
            <p className="relative font-body text-[16px] text-deep-soft max-w-lg mx-auto mb-10">
              Whether you&apos;re launching a community initiative or applying for your first grant, we&apos;re here to help you do it right.
            </p>
            <div className="relative flex gap-3 justify-center flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-paper font-body font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 no-underline"
                style={{ background: RUST, boxShadow: '0 10px 28px rgba(191,94,58,0.32), inset 0 1px 0 rgba(255,255,255,0.25)' }}
              >
                Start the Conversation
                <Arrow />
              </Link>
              <Link
                href="/services/digital-branding"
                className="inline-flex items-center gap-2 border border-deep/15 text-deep font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-deep/5 transition-all duration-200 no-underline"
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
