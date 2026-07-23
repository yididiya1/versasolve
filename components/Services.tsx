type Hue = 'gold' | 'azure' | 'plum' | 'sage' | 'teal'
type IconName = 'branding' | 'web' | 'media' | 'care' | 'community'

function ServiceIcon({ name, size = 30 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'branding':
      return (
        <svg {...common}>
          <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5 10.3 7.8 12 3z" />
          <path d="M18.5 14.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z" />
        </svg>
      )
    case 'web':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <line x1="3" y1="8.2" x2="21" y2="8.2" />
          <line x1="9.5" y1="21" x2="14.5" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    case 'media':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M10.5 9.2l4.2 2.8-4.2 2.8V9.2z" />
        </svg>
      )
    case 'care':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5.5c0 4.2-3 6.7-7 8.5-4-1.8-7-4.3-7-8.5V6l7-3z" />
          <path d="M8.8 12l2 2 4-4.4" />
        </svg>
      )
    case 'community':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.6" />
          <path d="M4 19v-1a5 5 0 0 1 10 0v1" />
          <path d="M16.5 6.4a2.4 2.4 0 0 1 0 4.6" />
          <path d="M17 13.4a5 5 0 0 1 3 4.6v1" />
        </svg>
      )
  }
}

const palette: Record<Hue, { solid: string; mark: string; glow: string }> = {
  gold:  { solid: '#a06a1f', mark: 'rgba(212,149,58,0.14)', glow: 'rgba(216,138,43,0.10)' },
  azure: { solid: '#2f6ea3', mark: 'rgba(58,143,201,0.14)', glow: 'rgba(58,143,201,0.10)' },
  plum:  { solid: '#6f54b8', mark: 'rgba(139,111,214,0.14)', glow: 'rgba(139,111,214,0.10)' },
  sage:  { solid: '#3a7457', mark: 'rgba(79,158,114,0.15)', glow: 'rgba(79,158,114,0.10)' },
  teal:  { solid: '#1f7a86', mark: 'rgba(45,164,178,0.14)', glow: 'rgba(45,164,178,0.10)' },
}

const services: ReadonlyArray<{
  num: string; icon: IconName; name: string; desc: string; tags: string[]; hue: Hue
}> = [
  {
    num: '01',
    icon: 'branding',
    name: 'Digital Branding Optimization',
    desc: 'We strengthen your online presence through strategic positioning, SEO, visual consistency, and data-driven marketing , using modern tools, including AI-assisted analysis, to surface opportunities and guide informed decisions.',
    tags: ['Logo & Branding', 'SEO', 'Marketing Strategy', 'Community Consulting'],
    hue: 'gold',
  },
  {
    num: '02',
    icon: 'web',
    name: 'Website Design',
    desc: 'We design clean, professional, conversion-focused websites , optimized for user experience , that help organizations establish trust, communicate their mission, and engage their audiences effectively.',
    tags: ['Conversion-Optimized', 'Responsive', 'User-Focused'],
    hue: 'azure',
  },
  {
    num: '03',
    icon: 'media',
    name: 'Promotional Media',
    desc: 'We create promotional videos, reels, and visual content that help organizations tell their story, increase engagement, and build lasting brand awareness.',
    tags: ['Video & Reels', 'Storytelling', 'Brand Awareness'],
    hue: 'plum',
  },
  {
    num: '04',
    icon: 'care',
    name: 'VersaCare™',
    desc: 'Our recurring digital support system provides ongoing website updates, optimization, reporting, and strategic guidance , so your digital presence keeps improving long after launch.',
    tags: ['Ongoing Support', 'Optimization', 'Reporting'],
    hue: 'sage',
  },
  {
    num: '05',
    icon: 'community',
    name: 'Impact-Driven Solutions',
    desc: 'We help businesses and nonprofits bring people together through thoughtfully planned, well-executed initiatives , from community events to hands-on AI training for teams , designed to foster genuine engagement, strengthen relationships, and drive measurable, lasting impact.',
    tags: ['Community Initiatives', 'Team AI Training', 'Engagement', 'Measurable Impact'],
    hue: 'teal',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-page py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[320px] w-[640px] -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(200,134,42,0.1) 0%, transparent 70%)' }} />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-14 reveal">
          <div>
            <span className="eyebrow mb-5">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">What We Do</span>
            </span>
            <h2
              className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)' }}
            >
              Everything your<br /><span className="text-gradient-warm">digital presence</span> needs
            </h2>
          </div>
          <p className="font-body text-[16px] leading-relaxed text-deep-mute lg:max-w-xs lg:pb-1.5">
            From your first website to ongoing optimization, we combine strategy, branding,
            design, and AI-assisted insights to help your organization grow with clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const c = palette[s.hue]
            return (
              <div
                key={s.num}
                className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift group relative rounded-2xl overflow-hidden`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${c.glow}, transparent 60%)` }}
                />

                {/* Large decorative number */}
                <span
                  className="absolute top-0 right-4 z-20 font-display font-bold italic select-none pointer-events-none leading-none hidden sm:block"
                  style={{ fontSize: '7rem', color: c.mark }}
                >
                  {s.num}
                </span>

                {/* Text content */}
                <div className="relative z-10 p-8 xl:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span style={{ color: c.solid }}>
                      <ServiceIcon name={s.icon} size={30} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[2.5px] uppercase" style={{ color: c.solid, opacity: 0.75 }}>
                      Service {s.num}
                    </span>
                  </div>

                  <h3
                    className="font-display italic font-semibold text-deep mb-4 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(21px, 2vw, 28px)' }}
                  >
                    {s.name}
                  </h3>

                  <p className="font-body text-[15px] leading-relaxed text-deep-soft">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 rounded-full border border-edge bg-white/60 text-deep-soft backdrop-blur-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.solid }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
