const audiences = [
  { name: 'Nonprofits', tagline: 'Amplify your mission and earn donor trust.', dot: '#a06a1f' },
  { name: 'Small Businesses', tagline: 'Stand out and convert with confidence.', dot: '#2f6ea3' },
  { name: 'Startups', tagline: 'Launch credible from day one.', dot: '#6f54b8' },
  { name: 'Community Organizations', tagline: 'Engage and grow the people you serve.', dot: '#3a7457' },
  { name: 'Social Enterprises', tagline: 'Align your purpose with your presence.', dot: '#a06a1f' },
  { name: 'Mission-Driven Leaders', tagline: 'A presence that matches your vision.', dot: '#2f6ea3' },
]

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="relative overflow-hidden bg-page-soft py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-[6%] h-[380px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(79,158,114,0.1) 0%, transparent 65%)' }} />
        <div className="absolute right-[-4%] bottom-[8%] h-[360px] w-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)' }} />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
        {/* Left: intro + philosophy */}
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow mb-5 reveal">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Who We Serve</span>
          </span>
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-5 reveal reveal-d1"
            style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
          >
            Built for organizations<br />doing <span className="text-gradient-warm">meaningful work</span>
          </h2>
          <p className="font-body text-[15.5px] leading-relaxed text-deep-soft max-w-md mb-5 reveal reveal-d2">
            We believe a digital presence should be treated like critical organizational
            infrastructure — not a one-time project. Many organizations invest heavily in their
            websites and branding, yet lack the systems to maintain and improve them over time.
          </p>
          <p className="font-body text-[15.5px] leading-relaxed text-deep-soft max-w-md reveal reveal-d2">
            Our goal is to bridge that gap — helping clients move from{' '}
            <b className="font-semibold text-deep">digital uncertainty</b> to{' '}
            <b className="font-semibold text-deep">digital clarity</b> through strategic design,
            ongoing support, and actionable insights.
          </p>
        </div>

        {/* Right: audiences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audiences.map((a, i) => (
            <div
              key={a.name}
              className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift rounded-2xl p-6`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                <h3 className="font-display italic font-semibold text-deep text-[19px] leading-tight tracking-tight">
                  {a.name}
                </h3>
              </div>
              <p className="font-body text-[13.5px] leading-relaxed text-deep-soft pl-[18px]">
                {a.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
