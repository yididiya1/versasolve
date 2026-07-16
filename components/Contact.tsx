const options = [
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
    action: 'Schedule 15-Min Call',
    href: 'https://calendar.app.google/TRNg4J99aZ2spjC88',
    accent: 'rust',
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
] as const

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink-surface py-24 md:py-36 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(212,149,58,0.1) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent 75%)',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">

          <span className="eyebrow mb-5 reveal" style={{ borderColor: 'rgba(232,163,61,0.22)', background: 'rgba(232,163,61,0.06)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#5BD08A] ring-4 ring-[#5BD08A]/20" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold">Get In Touch</span>
          </span>

          <h2
            className="font-display italic font-semibold text-cream leading-[0.97] tracking-tight mb-5 reveal reveal-d1"
            style={{ fontSize: 'clamp(38px, 6vw, 80px)' }}
          >
            Ready to Build<br />
            <span className="text-gradient-warm">Something</span><br />
            Extraordinary?
          </h2>

          <p className="font-body text-[16.5px] leading-relaxed text-warm mb-12 max-w-lg mx-auto reveal reveal-d2">
            Whether you&apos;re launching a new organization, refreshing your brand, or building
            systems for long-term growth, we&apos;ll help you move from digital uncertainty to
            digital clarity. Let&apos;s build a stronger digital foundation together.
          </p>

          {/* Contact option cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 reveal reveal-d3">
            {options.map((opt) => (
              <a
                key={opt.action}
                href={opt.href}
                target={opt.href.startsWith('http') ? '_blank' : undefined}
                rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`panel-dark group flex flex-col items-center text-center gap-4 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 no-underline ${
                  opt.accent === 'gold'
                    ? 'hover:border-gold/35 hover:shadow-[0_22px_56px_rgba(212,149,58,0.16)]'
                    : 'hover:border-rust/35 hover:shadow-[0_22px_56px_rgba(191,94,58,0.16)]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-[14px] grid place-items-center transition-colors duration-300 ${
                    opt.accent === 'gold'
                      ? 'bg-gold/10 text-gold group-hover:bg-gold/18'
                      : 'bg-rust/10 text-rust group-hover:bg-rust/18'
                  }`}
                >
                  {opt.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[2px] uppercase text-warm/60 mb-1">
                    {opt.label}
                  </p>
                  <p
                    className={`font-display italic font-semibold text-[18px] leading-tight ${
                      opt.accent === 'gold' ? 'text-cream' : 'text-cream'
                    }`}
                  >
                    {opt.action}
                  </p>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`mt-auto opacity-40 group-hover:opacity-80 transition-all duration-200 group-hover:translate-x-1 ${
                    opt.accent === 'gold' ? 'text-gold' : 'text-rust'
                  }`}
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
