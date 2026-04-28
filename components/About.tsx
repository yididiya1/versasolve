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
      className="relative bg-ink py-24 md:py-32 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(212,149,58,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── Owner grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">

          {/* Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              {/* Photo frame */}
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(160deg, rgba(212,149,58,0.12) 0%, rgba(29,24,16,1) 100%)',
                  border: '1px solid rgba(212,149,58,0.12)',
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
                      'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(212,149,58,0.015) 40px, rgba(212,149,58,0.015) 41px)',
                  }}
                />
              </div>

              {/* Credential badge — floating */}
              <div
                className="absolute -bottom-5 -right-5 md:right-0 p-5 rounded-xl text-center"
                style={{
                  background: 'rgba(29,24,16,0.97)',
                  border: '1px solid rgba(212,149,58,0.2)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                <div className="font-display italic font-semibold text-gold text-[28px] leading-none mb-1">
                  MA
                </div>
                <div className="font-mono text-[9px] text-warm/60 tracking-[1.5px] uppercase leading-tight">
                  Leadership &<br />Org Studies
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3 reveal">
              <span className="block w-6 h-px bg-gold" />
              Meet the Founder
            </p>

            <h2
              className="font-display italic font-semibold text-cream leading-[0.95] tracking-tight mb-2 reveal reveal-d1"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
            >
              Abedom<br />Gebreyesus
            </h2>
            <p className="font-mono text-[11px] tracking-[2.5px] uppercase text-gold/70 mb-8 reveal reveal-d1">
              Owner & Principal Consultant
            </p>

            <div className="space-y-4 font-body text-[15.5px] leading-relaxed text-warm mb-8 reveal reveal-d2">
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
                informs every strategy VersaSolve builds.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mb-10 reveal reveal-d3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-cream/60 px-3.5 py-2 rounded-full border border-cream/8 bg-cream/[0.03]"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                  {c}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="reveal reveal-d4 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-body font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,149,58,0.4)] no-underline"
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
          className="reveal mt-20 md:mt-24 rounded-2xl px-8 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(212,149,58,0.07) 0%, rgba(29,24,16,1) 60%)',
            border: '1px solid rgba(212,149,58,0.12)',
          }}
        >
          <div>
            <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-gold" />
              Our Vision
            </p>
            <h3
              className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}
            >
              A future where organizations thrive through{' '}
              <span className="text-gold">empowered cultures</span>
            </h3>
          </div>
          <p className="font-body text-[16px] leading-relaxed text-warm border-l border-gold/15 pl-8">
            At VersaSolve Consulting, we envision a future where organizations thrive through
            empowered cultures and optimized digital brands. By blending strategic innovation
            with community-driven excellence, we create lasting solutions that drive success,
            impact, and sustainable growth — for every client, in every community we touch.
          </p>
        </div>
      </div>
    </section>
  )
}
