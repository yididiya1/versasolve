import HeroBackground from '@/components/HeroBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink"
    >
      {/*
        ── Background ──────────────────────────────────────────────
        Animated gradient mesh + optional video layer.
        To add a real video: drop your .mp4 into /public/ and pass
        videoSrc="/your-file.mp4" to HeroBackground below.
        ─────────────────────────────────────────────────────────── */}
      {/* To use a real video: <HeroBackground videoSrc="/hero-bg.mp4" /> */}
      <HeroBackground />

      {/* ── Content ── */}
      <div className="relative z-10 px-6 md:px-14 xl:px-24 pt-28 pb-16 max-w-[1400px] mx-auto w-full">

        {/* Badge */}
        <div
          className="[animation:fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.05s_both] inline-flex items-center gap-2.5 mb-10 px-4 py-[7px] rounded-full border border-gold/20 bg-gold/6"
          style={{ background: 'rgba(212,149,58,0.06)' }}
        >
          <span className="w-[7px] h-[7px] rounded-full bg-gold animate-dot-pulse flex-shrink-0" />
          <span className="font-mono text-[10.5px] text-gold/80 tracking-[2.5px] uppercase">
            Consulting · Branding · Community Impact
          </span>
        </div>

        {/* ── Main headline ── */}
        <div className="[animation:fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.15s_both]">
          <h1
            className="font-display italic font-semibold text-cream leading-[0.88] tracking-[-3px] select-none"
            style={{ fontSize: 'clamp(58px, 9.5vw, 134px)' }}
          >
            <span className="block">Cultivating</span>
            <span
              className="block text-gold"
              style={{
                WebkitTextStroke: '0px',
                textShadow: '0 0 120px rgba(212,149,58,0.25)',
              }}
            >
              Solutions
            </span>
            <span
              className="block text-cream"
              style={{ fontSize: 'clamp(46px, 7.6vw, 108px)' }}
            >
              to Empower
            </span>
            <span
              className="block"
              style={{
                fontSize: 'clamp(46px, 7.6vw, 108px)',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(236,231,221,0.45)',
              }}
            >
              Organizations
            </span>
          </h1>
        </div>

        {/* ── Subtitle row ── */}
        <div className="[animation:fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_0.3s_both] mt-10 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-14">
          <div className="hidden lg:block w-14 h-px bg-gold/35 flex-shrink-0 mb-1.5" />
          <p className="font-body text-[17px] leading-relaxed text-warm max-w-[420px]">
            VersaSolve Consulting leverages organizational culture strategies and
            digital branding optimization to help businesses and nonprofits build
            brands that last — and communities that thrive.
          </p>
          <div className="flex gap-3 flex-wrap lg:ml-auto flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink font-body font-semibold text-[14px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,149,58,0.45)] no-underline"
            >
              Start the Journey
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
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-cream/12 text-cream font-body font-medium text-[14px] px-7 py-3.5 rounded-full hover:bg-cream/5 hover:border-cream/20 transition-all duration-200 no-underline"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="[animation:fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_0.45s_both] mt-14 pt-7 border-t border-gold/10 flex flex-wrap gap-8 md:gap-14">
          {(
            [
              { num: '5+', label: 'Continents Reached' },
              { num: '2', label: 'Pillars of Excellence' },
              { num: '100%', label: 'Mission-Driven' },
            ] as const
          ).map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-display italic font-semibold text-[38px] text-gold leading-none">
                {num}
              </span>
              <span className="font-mono text-[10px] text-warm tracking-[2px] uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical label — desktop only */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 items-center gap-3 -rotate-90 origin-center pointer-events-none select-none">
        <div className="w-16 h-px bg-gold/20" />
        <span className="font-mono text-[10px] text-warm/50 tracking-[3px] uppercase whitespace-nowrap">
          VersaSolve Consulting
        </span>
        <div className="w-16 h-px bg-gold/20" />
      </div>
    </section>
  )
}
