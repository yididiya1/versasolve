import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Branding Optimization — VersaSolve Consulting',
  description:
    'Tailored logo creation, engaging web design, and captivating promotional videos to enhance your brand recognition and boost engagement across all platforms.',
}

const subServices = [
  {
    num: '01',
    symbol: '▣',
    name: 'Web Design',
    desc: 'Visually appealing, user-friendly websites optimized for all devices. We improve website visibility and boost online engagement — attracting more visitors and converting them into loyal clients.',
    deliverables: ['Responsive design', 'SEO optimization', 'Performance-focused build', 'Cross-browser compatibility'],
  },
  {
    num: '02',
    symbol: '◆',
    name: 'Logo Creation & Branding',
    desc: 'We craft distinctive brand identities that capture your essence and resonate with your audience — giving your business a visual presence that stands out and tells your story effectively.',
    deliverables: ['Primary logo suite', 'Brand color palette', 'Typography system', 'Brand style guide'],
  },
  {
    num: '03',
    symbol: '◈',
    name: 'Promotional Videos for Websites & Social Media',
    desc: 'We produce captivating promotional videos tailored for your website and social media channels — effectively communicating your brand story and driving audience interaction.',
    deliverables: ['Concept & storyboarding', 'Professional production', 'Social media edits', 'Website-ready formats'],
  },
] as const

const benefits = [
  { icon: '◎', title: 'Brand Recognition', desc: 'A cohesive visual identity makes your brand instantly recognizable across every touchpoint — online and offline.' },
  { icon: '◈', title: 'Competitive Edge', desc: 'Stand out in a crowded market with professional design that signals credibility, quality, and purpose.' },
  { icon: '◉', title: 'Audience Engagement', desc: 'Engaging visuals and video content increase time on site, social shares, and meaningful audience interaction.' },
] as const

export default function DigitalBrandingPage() {
  return (
    <main className="bg-ink text-cream">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden pt-[76px]">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-20 w-[640px] h-[640px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.14) 0%, transparent 65%)', filter: 'blur(80px)' }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.07) 0%, transparent 65%)', filter: 'blur(90px)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(212,149,58,0.5) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
              opacity: 0.025,
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
            <span className="font-mono text-[10.5px] tracking-[2px] uppercase text-gold/70">
              Digital Branding Optimization
            </span>
          </div>

          <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-gold" />
            Service 01
          </p>

          <h1
            className="font-display italic font-semibold text-cream leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
          >
            Digital Branding<br />
            <span className="text-gold">Optimization</span>
          </h1>

          <p className="font-body text-[17px] leading-relaxed text-warm max-w-[520px] mb-10">
            We offer tailored logo creation and branding, visually engaging website design,
            and captivating promotional videos for your online presence. Our services enhance
            brand recognition and boost engagement — helping you stand out in a competitive market.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-body font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,149,58,0.45)] no-underline"
            >
              Start Your Brand Journey
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
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-gold" />
            What&apos;s Included
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            Three Ways We Build<br />Your Brand
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subServices.map((s, i) => (
              <div
                key={s.num}
                className={`reveal reveal-d${i + 1} group relative bg-ink-card border border-gold/10 rounded-2xl p-8 hover:border-gold/28 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="absolute top-4 right-5 font-display italic font-bold text-gold/[0.04] select-none pointer-events-none leading-none" style={{ fontSize: '7rem' }}>
                  {s.num}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-lg text-gold/60">{s.symbol}</span>
                    <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-gold/50">{s.num}</span>
                  </div>
                  <h3
                    className="font-display italic font-semibold text-cream mb-3 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(19px, 1.8vw, 24px)' }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-body text-[14.5px] leading-relaxed text-warm mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-warm/60">
                        <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
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

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="bg-ink py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-gold" />
            Why It Matters
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-14 reveal reveal-d1"
            style={{ fontSize: 'clamp(30px, 3.8vw, 50px)' }}
          >
            The Impact of Strong<br />Digital Branding
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`reveal reveal-d${i + 1} bg-ink-card border border-gold/10 rounded-2xl p-8 hover:border-gold/25 transition-all duration-300`}
              >
                <span className="block text-3xl text-gold/50 mb-5">{b.icon}</span>
                <h3 className="font-display italic font-semibold text-[22px] text-cream mb-3 tracking-tight">{b.title}</h3>
                <p className="font-body text-[15px] leading-relaxed text-warm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-ink-surface py-24 px-6 md:px-14 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div
            className="reveal rounded-2xl px-8 md:px-16 py-14 md:py-20 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(212,149,58,0.08) 0%, rgba(29,24,16,1) 60%)',
              border: '1px solid rgba(212,149,58,0.15)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,149,58,0.07) 0%, transparent 65%)' }}
            />
            <p className="relative font-mono text-[11px] tracking-[3px] uppercase text-gold mb-4">
              Ready to Elevate Your Brand?
            </p>
            <h2
              className="relative font-display italic font-semibold text-cream leading-[0.97] tracking-tight mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
            >
              Let&apos;s Build Something<br /><span className="text-gold">Unforgettable</span>
            </h2>
            <p className="relative font-body text-[16px] text-warm max-w-lg mx-auto mb-10">
              Partner with us to elevate your brand, strengthen your impact, and build a future of lasting success.
            </p>
            <div className="relative flex gap-3 justify-center flex-wrap">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-body font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,149,58,0.4)] no-underline"
              >
                Get Started Today
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services/impact-driven"
                className="inline-flex items-center gap-2 border border-cream/12 text-cream font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-cream/5 transition-all duration-200 no-underline"
              >
                Explore Impact-Driven Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
