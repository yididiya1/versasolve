import Image from 'next/image'

const credentials = [
  'Psychology & Holistic Health BA',
  'Leadership & Org Studies MA',
  'University of New England',
  '5 Continents',
  'Winchester, London',
  'Lynn, Massachusetts',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-page py-24 md:py-32 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 h-[500px] w-[500px]"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(212,149,58,0.12) 0%, transparent 60%)' }}
        />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── Owner grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">

          {/* Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              {/* Photo frame */}
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,31,18,0.12)]"
                style={{
                  background: 'linear-gradient(160deg, rgba(212,149,58,0.18) 0%, rgba(231,223,208,1) 100%)',
                  border: '1px solid rgba(160,106,31,0.18)',
                }}
              >
                <Image
                  src="/images/abedom.avif"
                  alt="Abedom Gebreyesus — Owner & Principal Consultant"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Decorative diagonal stripe */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(212,149,58,0.02) 40px, rgba(212,149,58,0.02) 41px)',
                  }}
                />
              </div>

              {/* Credential badge — floating */}
              <div className="glass-card absolute -bottom-5 -right-5 md:right-0 p-5 rounded-xl text-center">
                <div className="font-display italic font-semibold text-gradient-warm text-[28px] leading-none mb-1">
                  MA
                </div>
                <div className="font-mono text-[9px] text-deep-mute tracking-[1.5px] uppercase leading-tight">
                  Leadership &<br />Org Studies
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-5 reveal">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Meet the Founder</span>
            </span>

            <h2
              className="font-display italic font-semibold text-deep leading-[0.95] tracking-tight mb-2 mt-5 reveal reveal-d1"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
            >
              Abedom<br /><span className="text-gradient-warm">Gebreyesus</span>
            </h2>
            <p className="font-mono text-[11px] tracking-[2.5px] uppercase text-gold-dark/80 mb-8 reveal reveal-d1">
              Owner & Principal Consultant
            </p>

            <div className="space-y-4 font-body text-[15.5px] leading-relaxed text-deep-soft mb-8 reveal reveal-d2">
              <p>
                Born across three countries — Ethiopia, Eritrea, and Kenya — Abedom found
                his home in the inner cities of Massachusetts, spending seven transformative
                years in Lynn, Maine, before earning a Bachelor&apos;s in Psychology and
                Holistic Health and a Master&apos;s in Leadership and Organizational Studies
                from the University of New England.
              </p>
              <p>
                His passion for cultural understanding has taken him to five continents —
                North and South America, Europe, Asia, and Africa — including a profound
                study abroad at the University of Winchester, London. That global lens
                informs every strategy VersaSolve Consulting builds.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mb-10 reveal reveal-d3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-deep-soft px-3.5 py-2 rounded-full border border-edge bg-white/60 backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F0B454,#C75B39)' }} />
                  {c}
                </span>
              ))}
            </div>

            <a
              href="https://calendar.app.google/TRNg4J99aZ2spjC88"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-warm reveal reveal-d4 inline-flex items-center gap-2 font-body font-semibold text-[14px] px-7 py-3.5 rounded-full no-underline"
            >
              Work With Abedom
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
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
        </div>

        {/* ── Vision block ── */}
        <div
          className="reveal glass-card relative mt-20 md:mt-24 overflow-hidden rounded-2xl px-8 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center"
        >
          <div
            className="pointer-events-none absolute -top-1/4 -left-[8%] h-[140%] w-[45%]"
            style={{ background: 'radial-gradient(circle at center, rgba(212,149,58,0.16) 0%, transparent 65%)' }}
          />
          <div className="relative">
            <span className="eyebrow mb-4">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Mission &amp; Vision</span>
            </span>
            <h3
              className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mt-4 mb-5"
              style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}
            >
              A future where every organization grows with clarity, confidence, and{' '}
              <span className="text-gradient-warm">purpose</span>
            </h3>
            <p className="font-body text-[15.5px] leading-relaxed text-deep-soft border-l-2 border-gold-dark/30 pl-6">
              Our mission is to empower organizations through digital branding optimization,
              AI-assisted insights, and sustainable systems that strengthen visibility, credibility,
              and long-term impact — meeting every organization where they are, regardless of size or budget.
            </p>
          </div>

          {/* Vision photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge shadow-[0_20px_50px_-20px_rgba(42,31,18,0.4)]">
            <Image
              src="/images/community.jpg"
              alt="The VersaSolve Consulting team collaborating with a partner organization"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(160deg, transparent 55%, rgba(26,20,13,0.35))' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
