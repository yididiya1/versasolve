function TagIcon({ tag }: { tag: string }) {
  switch (tag) {
    case 'Logo & Branding':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M6 1L10.5 5.5 6 10.5 1.5 5.5Z" stroke="#d4953a" strokeWidth="1.5" strokeLinejoin="round"/>
          <line x1="1.5" y1="5.5" x2="10.5" y2="5.5" stroke="#d4953a" strokeWidth="1.5"/>
        </svg>
      )
    case 'Web Design':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="#60a5fa" strokeWidth="1.4"/>
          <line x1="1" y1="4.8" x2="11" y2="4.8" stroke="#60a5fa" strokeWidth="1.4"/>
          <circle cx="3" cy="3.4" r="0.6" fill="#60a5fa"/>
          <circle cx="4.8" cy="3.4" r="0.6" fill="#60a5fa"/>
        </svg>
      )
    case 'Promo Videos':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="4.5" stroke="#a78bfa" strokeWidth="1.4"/>
          <path d="M5 4.2l3.5 1.8L5 7.8V4.2z" fill="#a78bfa"/>
        </svg>
      )
    case 'Social Media':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="9.5" cy="2.5" r="1.4" stroke="#34d399" strokeWidth="1.2"/>
          <circle cx="9.5" cy="9.5" r="1.4" stroke="#34d399" strokeWidth="1.2"/>
          <circle cx="2.5" cy="6"   r="1.4" stroke="#34d399" strokeWidth="1.2"/>
          <line x1="3.9" y1="5.3" x2="8.1" y2="3.2" stroke="#34d399" strokeWidth="1.2"/>
          <line x1="3.9" y1="6.7" x2="8.1" y2="8.8" stroke="#34d399" strokeWidth="1.2"/>
        </svg>
      )
    case 'Responsive':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <rect x="0.5" y="2.5" width="7.5" height="5.5" rx="1" stroke="#22d3ee" strokeWidth="1.3"/>
          <rect x="8.8" y="3.8" width="2.7" height="4" rx="0.7" stroke="#22d3ee" strokeWidth="1.3"/>
        </svg>
      )
    case 'SEO-Optimized':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="5" cy="5" r="3.5" stroke="#4ade80" strokeWidth="1.4"/>
          <line x1="7.5" y1="7.5" x2="11" y2="11" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      )
    case 'Identity Design':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M6 1v2M6 9v2M1 6h2M9 6h2M2.8 2.8l1.4 1.4M7.8 7.8l1.4 1.4M2.8 9.2l1.4-1.4M7.8 4.2l1.4-1.4" stroke="#f472b6" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      )
    case 'Brand Strategy':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="4.5" stroke="#fb923c" strokeWidth="1.3"/>
          <circle cx="6" cy="6" r="2.3" stroke="#fb923c" strokeWidth="1.3"/>
          <circle cx="6" cy="6" r="0.8" fill="#fb923c"/>
        </svg>
      )
    case 'Community Projects':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="4.5" cy="3.5" r="1.5" stroke="#60a5fa" strokeWidth="1.3"/>
          <path d="M1.5 10c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round"/>
          <circle cx="8.8" cy="3.5" r="1.2" stroke="#93c5fd" strokeWidth="1.2"/>
          <path d="M8.2 7.2c1 .1 2 .9 2.3 2.8" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )
    case 'Grant Writing':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2.5 2h5.2L9.5 3.8V10h-7V2z" stroke="#c084fc" strokeWidth="1.3" strokeLinejoin="round"/>
          <line x1="4" y1="5.2" x2="7.5" y2="5.2" stroke="#c084fc" strokeWidth="1.3" strokeLinecap="round"/>
          <line x1="4" y1="7" x2="6.2" y2="7" stroke="#c084fc" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      )
    case 'Nonprofits':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M6 10S1.5 7.2 1.5 4.2a2.5 2.5 0 015-.2 2.5 2.5 0 015 .2C11.5 7.2 6 10 6 10z" stroke="#f87171" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
      )
    case 'Funding Strategy':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="4.5" stroke="#fbbf24" strokeWidth="1.3"/>
          <path d="M6 3.5v5M4.5 5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7 6.5 6 6.5s-1.5.67-1.5 1.5S5.17 9.5 6 9.5" stroke="#fbbf24" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      )
    case 'Proposal Writing':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M8.5 1.5L10.5 3.5 4.5 9.5l-3 .5.5-3 6-5.5z" stroke="#2dd4bf" strokeWidth="1.3" strokeLinejoin="round"/>
          <line x1="7" y1="3" x2="9" y2="5" stroke="#2dd4bf" strokeWidth="1.3"/>
        </svg>
      )
    default:
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <circle cx="6" cy="6" r="2" fill="currentColor" opacity="0.5"/>
        </svg>
      )
  }
}
type Hue = 'gold' | 'azure' | 'plum' | 'sage' | 'rust'
type IconName = 'branding' | 'web' | 'logo' | 'community' | 'grant'

function ServiceIcon({ name, size = 22 }: { name: IconName; size?: number }) {
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
    case 'logo':
      return (
        <svg {...common}>
          <path d="M4 20l1-4 9-9 3 3-9 9-4 1z" />
          <path d="M13.5 6.5l3 3" />
        </svg>
      )
    case 'community':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
          <circle cx="17" cy="7" r="2.2" />
          <path d="M15.6 12.9c2.3.2 4.4 1.9 4.4 4.6" />
        </svg>
      )
    case 'grant':
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v4h4" />
          <path d="M9 13.5l1.8 1.8L14.5 11.5" />
        </svg>
      )
  }
}

const palette: Record<Hue, { grad: string; solid: string; mark: string; glow: string; shadow: string }> = {
  gold:  { grad: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)', solid: '#a06a1f', mark: 'rgba(212,149,58,0.14)', glow: 'rgba(216,138,43,0.10)', shadow: 'rgba(216,138,43,0.28)' },
  azure: { grad: 'linear-gradient(135deg,#7cc3f0,#3a8fc9 50%,#2f6ea3)', solid: '#2f6ea3', mark: 'rgba(58,143,201,0.14)', glow: 'rgba(58,143,201,0.10)', shadow: 'rgba(58,143,201,0.26)' },
  plum:  { grad: 'linear-gradient(135deg,#b79bf0,#8b6fd6 50%,#6f54b8)', solid: '#6f54b8', mark: 'rgba(139,111,214,0.14)', glow: 'rgba(139,111,214,0.10)', shadow: 'rgba(139,111,214,0.26)' },
  sage:  { grad: 'linear-gradient(135deg,#88c79f,#4f9e72 50%,#3a7457)', solid: '#3a7457', mark: 'rgba(79,158,114,0.15)', glow: 'rgba(79,158,114,0.10)', shadow: 'rgba(79,158,114,0.26)' },
  rust:  { grad: 'linear-gradient(135deg,#d07558,#bf5e3a 55%,#8a3f22)', solid: '#8a3f22', mark: 'rgba(191,94,58,0.14)', glow: 'rgba(191,94,58,0.10)', shadow: 'rgba(191,94,58,0.26)' },
}

const services: ReadonlyArray<{
  num: string; icon: IconName; name: string; desc: string; tags: string[]; featured: boolean; hue: Hue
}> = [
  {
    num: '01',
    icon: 'branding',
    name: 'Digital Branding Optimization',
    desc: 'We offer tailored logo creation and branding, visually engaging website design, and captivating promotional videos for your online presence. Our services enhance brand recognition and boost engagement across platforms — helping you stand out in a competitive market.',
    tags: ['Logo & Branding', 'Web Design', 'Promo Videos', 'Social Media'],
    featured: true,
    hue: 'gold',
  },
  {
    num: '01a',
    icon: 'web',
    name: 'Web Design',
    desc: 'Visually appealing, user-friendly websites optimized for all devices. We improve website visibility and boost online engagement — attracting more visitors and converting them into loyal clients.',
    tags: ['Responsive', 'SEO-Optimized'],
    featured: false,
    hue: 'azure',
  },
  {
    num: '01b',
    icon: 'logo',
    name: 'Logo Creation & Branding',
    desc: 'We create captivating brand identities tailored for your website and social media — effectively communicating your unique brand story and driving audience interaction.',
    tags: ['Identity Design', 'Brand Strategy'],
    featured: false,
    hue: 'plum',
  },
  {
    num: '02',
    icon: 'community',
    name: 'Impact-Driven Solutions',
    desc: 'We help businesses and nonprofits build real community connections through well-executed initiatives that foster engagement and drive measurable impact. Helping you bring people together.',
    tags: ['Community Projects', 'Grant Writing', 'Nonprofits'],
    featured: false,
    hue: 'sage',
  },
  {
    num: '02a',
    icon: 'grant',
    name: 'Strategic Grant Writing',
    desc: 'Assisting organizations in securing funding through compelling grant proposals that align with their mission and goals — maximizing your chances of funding success.',
    tags: ['Funding Strategy', 'Proposal Writing'],
    featured: false,
    hue: 'rust',
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
              Two Pillars of<br /><span className="text-gradient-warm">Strategic Excellence</span>
            </h2>
          </div>
          <p className="font-body text-[16px] leading-relaxed text-deep-mute lg:max-w-xs lg:pb-1.5">
            Every engagement is built on deep expertise and an unwavering commitment
            to results that matter — for your brand and your community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const c = palette[s.hue]
            return (
            <div
              key={s.num}
              className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift group relative rounded-2xl overflow-hidden ${
                s.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${c.glow}, transparent 60%)` }}
              />

              {/* Large decorative number */}
              <span
                className="absolute top-0 right-4 z-20 font-display font-bold italic select-none pointer-events-none leading-none hidden sm:block"
                style={{ fontSize: s.featured ? '9rem' : '7rem', color: c.mark }}
              >
                {s.num}
              </span>

              {/* Text content */}
              <div className="relative z-10 p-8 xl:p-10">
                {/* Symbol tile + num */}
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ color: c.solid }}>
                    <ServiceIcon name={s.icon} size={30} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase" style={{ color: c.solid, opacity: 0.75 }}>
                    Service {s.num}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="font-display italic font-semibold text-deep mb-4 leading-tight tracking-tight"
                  style={{ fontSize: s.featured ? 'clamp(24px, 2.8vw, 36px)' : 'clamp(21px, 2vw, 27px)' }}
                >
                  {s.name}
                </h3>

                {/* Description */}
                <p className={`font-body text-[15px] leading-relaxed text-deep-soft ${s.featured ? 'max-w-2xl' : ''}`}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 rounded-full border border-edge bg-white/60 text-deep-soft backdrop-blur-sm"
                    >
                      <TagIcon tag={tag} />
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
