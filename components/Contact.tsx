type Accent = 'gold' | 'rust' | 'azure'

const options: ReadonlyArray<{
  icon: React.ReactNode
  label: string
  action: string
  href: string
  accent: Accent
}> = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 8l9 5.5L20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    label: 'Submit a Request',
    action: 'Project Request Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfOPUV_q__sEe-CNxtFpxYUR5ENSsFuJ14vrlO_ocZ_YoYyYg/viewform',
    accent: 'gold',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <rect x="3" y="2" width="16" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 7h8M7 11h8M7 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    label: 'Free Consultation',
    action: 'Book a free 15-min consultation',
    href: 'https://calendar.app.google/TRNg4J99aZ2spjC88',
    accent: 'gold',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'All Links',
    action: 'LinkTree (More Info)',
    href: 'https://linktr.ee/Versasolveconsulting',
    accent: 'gold',
  },
]

const accentStyles: Record<Accent, { fill: string; hoverShadow: string }> = {
  gold: {
    fill: 'linear-gradient(160deg, #f0b454 0%, #d98a2b 55%, #c0791f 100%)',
    hoverShadow: 'group-hover:shadow-[0_26px_60px_-22px_rgba(212,149,58,0.6)]',
  },
  rust: {
    fill: 'linear-gradient(160deg, #d07558 0%, #bf5e3a 55%, #8a3f22 100%)',
    hoverShadow: 'group-hover:shadow-[0_26px_60px_-22px_rgba(191,94,58,0.6)]',
  },
  azure: {
    fill: 'linear-gradient(160deg, #5aa6dc 0%, #3a8fc9 55%, #2f6ea3 100%)',
    hoverShadow: 'group-hover:shadow-[0_26px_60px_-22px_rgba(58,143,201,0.55)]',
  },
}

const reassurance = ['Free 15-min consultation', 'No commitment', 'Typically reply within 24h']

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-36 px-6 md:px-14 xl:px-24"
      style={{ background: 'linear-gradient(180deg, #f4ecdb 0%, #faf5ec 40%, #fdf8ed 100%)' }}
    >
      {/* ── seam transitions: ease from the dark section above and into the dark footer below ── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{ background: 'linear-gradient(180deg, #120E09 0%, rgba(18,14,9,0.35) 40%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(13,10,6,0.4) 55%, #0d0a06 100%)' }}
      />

      {/* ── warm atmosphere: soft floating glows + faint grid ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-10 left-[8%] h-[360px] w-[360px] rounded-full blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, rgba(232,163,61,0.22) 0%, transparent 68%)' }}
        />
        <div
          className="absolute bottom-4 right-[6%] h-[420px] w-[420px] rounded-full blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, rgba(191,94,58,0.16) 0%, transparent 70%)', animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(212,149,58,0.10) 0%, transparent 62%)' }}
        />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow mb-5 reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-sage animate-dot-pulse" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">
              Get In Touch · Accepting new projects
            </span>
          </span>

          <h2
            className="font-display italic font-semibold text-deep leading-[0.97] tracking-tight mb-5 reveal reveal-d1"
            style={{ fontSize: 'clamp(38px, 6vw, 80px)' }}
          >
            Ready to Build<br />
            <span className="text-gradient-warm">Something</span> Extraordinary?
          </h2>

          <p className="font-body text-[16.5px] leading-relaxed text-deep-mute mb-11 max-w-lg mx-auto reveal reveal-d2">
            Whether you&apos;re launching a new organization, refreshing your brand, or building
            systems for long-term growth, we&apos;ll help you move from digital uncertainty to
            digital clarity. Let&apos;s build a stronger digital foundation together.
          </p>

          {/* Contact option cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal reveal-d3">
            {options.map((opt) => {
              const a = accentStyles[opt.accent]
              return (
                <a
                  key={opt.action}
                  href={opt.href}
                  target={opt.href.startsWith('http') ? '_blank' : undefined}
                  rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group relative flex flex-col items-center text-center gap-4 p-7 rounded-2xl no-underline overflow-hidden border border-gold/25 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent ${a.hoverShadow}`}
                  style={{ background: 'linear-gradient(165deg, #fbf1db 0%, #f5e7cc 100%)' }}
                >
                  {/* accent fill , reveals on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: a.fill }}
                  />
                  <div className="relative w-12 h-12 rounded-[14px] grid place-items-center bg-white/55 text-gold-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white">
                    {opt.icon}
                  </div>
                  <div className="relative">
                    <p className="font-mono text-[10px] tracking-[2px] uppercase text-deep-mute/80 mb-1 transition-colors duration-300 group-hover:text-white/85">
                      {opt.label}
                    </p>
                    <p className="font-display italic font-semibold text-[18px] leading-tight text-deep transition-colors duration-300 group-hover:text-white">
                      {opt.action}
                    </p>
                  </div>
                  <span className="relative mt-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[1.5px] text-gold-dark opacity-80 transition-all duration-300 group-hover:text-white group-hover:opacity-100">
                    Open
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        d="M2 7h10M8 3.5 11.5 7 8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              )
            })}
          </div>

          {/* Low-friction reassurance row */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 reveal reveal-d4">
            {reassurance.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 font-body text-[13.5px] text-deep-mute">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className="text-gold-dark">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
                  <path d="M5 8.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
