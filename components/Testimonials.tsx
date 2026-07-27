import { TESTIMONIALS } from '@/lib/siteData'

const accents = ['#a06a1f', '#2f6ea3', '#a64a2a', '#3a7457'] as const

function QuoteMark({ color }: { color: string }) {
  return (
    <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden style={{ color }}>
      <path
        d="M14 3C7 5.5 3 11 3 18.5 3 22.6 5.4 25 8.8 25c3 0 5.2-2.2 5.2-5.2 0-3-2.1-5-5-5-.5 0-1 .1-1.3.2C9 11.4 11.4 8.4 15.4 6.4L14 3zM31 3c-7 2.5-11 8-11 15.5 0 4.1 2.4 6.5 5.8 6.5 3 0 5.2-2.2 5.2-5.2 0-3-2.1-5-5-5-.5 0-1 .1-1.3.2C26 11.4 28.4 8.4 32.4 6.4L31 3z"
        fill="currentColor"
        fillOpacity="0.9"
      />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-page py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-6%] top-[4%] h-[400px] w-[460px]"
          style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)' }} />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <span className="eyebrow mb-5">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">In Their Words</span>
          </span>
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight"
            style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}
          >
            Trusted by <span className="text-gradient-warm">mission-driven</span> teams
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => {
            const accent = accents[i % accents.length]
            return (
              <figure
                key={t.author}
                className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift rounded-2xl p-8 xl:p-10 flex flex-col`}
              >
                <QuoteMark color={accent} />
                <blockquote className="mt-5 font-body text-[15.5px] leading-relaxed text-deep-soft flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-edge pt-5">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display italic font-semibold text-[15px] text-white"
                    style={{ background: accent }}
                  >
                    {t.author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display italic font-semibold text-deep text-[16px] leading-tight">
                      {t.author}
                    </span>
                    <span className="block font-body text-[12.5px] text-deep-mute leading-tight mt-0.5">
                      {t.title} · {t.org}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
