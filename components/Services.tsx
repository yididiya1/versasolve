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

function ServiceIllustration({ num, accent }: { num: string; accent: string }) {
  const c = accent === 'gold' ? '#d4953a' : '#bf5e3a'

  switch (num) {
    case '01': // Digital Branding — orbital brand-mark system
      return (
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          <circle cx="60" cy="90" r="54" stroke={c} strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 7"/>
          <circle cx="60" cy="90" r="36" stroke={c} strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="2 5"/>
          <path d="M60 44 L97 90 L60 136 L23 90 Z" stroke={c} strokeWidth="1.5" strokeOpacity="0.55" fill={c} fillOpacity="0.04"/>
          <path d="M60 67 L83 90 L60 113 L37 90 Z" stroke={c} strokeWidth="1" strokeOpacity="0.22" fill={c} fillOpacity="0.03"/>
          <circle cx="60" cy="90" r="5" fill={c} fillOpacity="0.35"/>
          <circle cx="60" cy="90" r="2" fill={c} fillOpacity="0.7"/>
          <circle cx="60" cy="44" r="3" fill={c} fillOpacity="0.5"/>
          <circle cx="97" cy="90" r="2.5" fill={c} fillOpacity="0.35"/>
          <circle cx="60" cy="136" r="3" fill={c} fillOpacity="0.5"/>
          <circle cx="23" cy="90" r="2.5" fill={c} fillOpacity="0.35"/>
          <path d="M8 8 L18 8 M8 8 L8 18" stroke={c} strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round"/>
          <path d="M112 8 L102 8 M112 8 L112 18" stroke={c} strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round"/>
          <path d="M8 172 L18 172 M8 172 L8 162" stroke={c} strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round"/>
          <path d="M112 172 L102 172 M112 172 L112 162" stroke={c} strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round"/>
        </svg>
      )

    case '01a': // Web Design — browser + mobile mockup
      return (
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          <rect x="10" y="24" width="100" height="72" rx="5" stroke={c} strokeWidth="1.4" strokeOpacity="0.45"/>
          <line x1="10" y1="37" x2="110" y2="37" stroke={c} strokeWidth="0.8" strokeOpacity="0.2"/>
          <circle cx="20" cy="31" r="2" fill={c} fillOpacity="0.4"/>
          <circle cx="27" cy="31" r="2" fill={c} fillOpacity="0.3"/>
          <circle cx="34" cy="31" r="2" fill={c} fillOpacity="0.2"/>
          <rect x="18" y="44" width="40" height="22" rx="2" stroke={c} strokeWidth="0.8" strokeOpacity="0.2" fill={c} fillOpacity="0.03"/>
          <rect x="64" y="44" width="38" height="10" rx="2" stroke={c} strokeWidth="0.8" strokeOpacity="0.2" fill={c} fillOpacity="0.03"/>
          <rect x="64" y="58" width="38" height="8" rx="2" stroke={c} strokeWidth="0.8" strokeOpacity="0.14"/>
          <line x1="18" y1="74" x2="82" y2="74" stroke={c} strokeWidth="0.7" strokeOpacity="0.16"/>
          <line x1="18" y1="80" x2="58" y2="80" stroke={c} strokeWidth="0.7" strokeOpacity="0.11"/>
          <rect x="41" y="112" width="38" height="56" rx="5" stroke={c} strokeWidth="1.2" strokeOpacity="0.38"/>
          <line x1="54" y1="118" x2="66" y2="118" stroke={c} strokeWidth="1" strokeOpacity="0.22" strokeLinecap="round"/>
          <rect x="49" y="124" width="22" height="13" rx="2" stroke={c} strokeWidth="0.7" strokeOpacity="0.18" fill={c} fillOpacity="0.03"/>
          <line x1="49" y1="143" x2="71" y2="143" stroke={c} strokeWidth="0.7" strokeOpacity="0.16"/>
          <line x1="49" y1="150" x2="63" y2="150" stroke={c} strokeWidth="0.7" strokeOpacity="0.12"/>
          <circle cx="60" cy="160" r="3" stroke={c} strokeWidth="0.8" strokeOpacity="0.22"/>
          <path d="M60 96 L60 112" stroke={c} strokeWidth="0.7" strokeOpacity="0.18" strokeDasharray="2 3"/>
        </svg>
      )

    case '01b': // Logo Creation — overlapping geometric brand forms
      return (
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          <circle cx="44" cy="86" r="30" stroke={c} strokeWidth="1.3" strokeOpacity="0.38" fill={c} fillOpacity="0.03"/>
          <circle cx="76" cy="86" r="30" stroke={c} strokeWidth="1.3" strokeOpacity="0.38" fill={c} fillOpacity="0.03"/>
          <path d="M60 19 L86 56 L34 56 Z" stroke={c} strokeWidth="1.2" strokeOpacity="0.32" fill={c} fillOpacity="0.04"/>
          <circle cx="60" cy="86" r="6" fill={c} fillOpacity="0.22"/>
          <circle cx="60" cy="86" r="2.5" fill={c} fillOpacity="0.55"/>
          <line x1="30" y1="130" x2="90" y2="130" stroke={c} strokeWidth="0.8" strokeOpacity="0.18"/>
          <line x1="38" y1="139" x2="82" y2="139" stroke={c} strokeWidth="0.8" strokeOpacity="0.12"/>
          <line x1="46" y1="148" x2="74" y2="148" stroke={c} strokeWidth="0.8" strokeOpacity="0.07"/>
          <circle cx="14" cy="22" r="1.2" fill={c} fillOpacity="0.12"/>
          <circle cx="24" cy="22" r="1.2" fill={c} fillOpacity="0.09"/>
          <circle cx="96" cy="22" r="1.2" fill={c} fillOpacity="0.12"/>
          <circle cx="106" cy="22" r="1.2" fill={c} fillOpacity="0.09"/>
          <circle cx="14" cy="158" r="1.2" fill={c} fillOpacity="0.12"/>
          <circle cx="24" cy="158" r="1.2" fill={c} fillOpacity="0.09"/>
          <circle cx="96" cy="158" r="1.2" fill={c} fillOpacity="0.12"/>
          <circle cx="106" cy="158" r="1.2" fill={c} fillOpacity="0.09"/>
        </svg>
      )

    case '02': // Impact-Driven — community network nodes
      return (
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          <line x1="60" y1="54" x2="28" y2="90" stroke={c} strokeWidth="0.8" strokeOpacity="0.18"/>
          <line x1="60" y1="54" x2="92" y2="90" stroke={c} strokeWidth="0.8" strokeOpacity="0.18"/>
          <line x1="28" y1="90" x2="48" y2="126" stroke={c} strokeWidth="0.8" strokeOpacity="0.18"/>
          <line x1="92" y1="90" x2="72" y2="126" stroke={c} strokeWidth="0.8" strokeOpacity="0.18"/>
          <line x1="28" y1="90" x2="92" y2="90" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="48" y1="126" x2="72" y2="126" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="60" y1="24" x2="60" y2="54" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="14" y1="90" x2="28" y2="90" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="106" y1="90" x2="92" y2="90" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="38" y1="152" x2="48" y2="126" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <line x1="82" y1="152" x2="72" y2="126" stroke={c} strokeWidth="0.7" strokeOpacity="0.13"/>
          <circle cx="60" cy="90" r="9" stroke={c} strokeWidth="1.2" strokeOpacity="0.38" fill={c} fillOpacity="0.07"/>
          <circle cx="60" cy="90" r="3.5" fill={c} fillOpacity="0.5"/>
          <circle cx="60" cy="54" r="6" stroke={c} strokeWidth="1.1" strokeOpacity="0.42" fill={c} fillOpacity="0.06"/>
          <circle cx="28" cy="90" r="6" stroke={c} strokeWidth="1.1" strokeOpacity="0.42" fill={c} fillOpacity="0.06"/>
          <circle cx="92" cy="90" r="6" stroke={c} strokeWidth="1.1" strokeOpacity="0.42" fill={c} fillOpacity="0.06"/>
          <circle cx="48" cy="126" r="6" stroke={c} strokeWidth="1.1" strokeOpacity="0.42" fill={c} fillOpacity="0.06"/>
          <circle cx="72" cy="126" r="6" stroke={c} strokeWidth="1.1" strokeOpacity="0.42" fill={c} fillOpacity="0.06"/>
          <circle cx="60" cy="24" r="4" stroke={c} strokeWidth="1" strokeOpacity="0.28" fill={c} fillOpacity="0.04"/>
          <circle cx="14" cy="90" r="4" stroke={c} strokeWidth="1" strokeOpacity="0.28" fill={c} fillOpacity="0.04"/>
          <circle cx="106" cy="90" r="4" stroke={c} strokeWidth="1" strokeOpacity="0.28" fill={c} fillOpacity="0.04"/>
          <circle cx="38" cy="152" r="4" stroke={c} strokeWidth="1" strokeOpacity="0.28" fill={c} fillOpacity="0.04"/>
          <circle cx="82" cy="152" r="4" stroke={c} strokeWidth="1" strokeOpacity="0.28" fill={c} fillOpacity="0.04"/>
        </svg>
      )

    case '02a': // Grant Writing — document with pen
      return (
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          <path d="M22 18 L78 18 L78 32 L93 32 L93 158 L22 158 Z" stroke={c} strokeWidth="1.4" strokeOpacity="0.42" fill={c} fillOpacity="0.03" strokeLinejoin="round"/>
          <path d="M78 18 L78 32 L93 32" stroke={c} strokeWidth="1" strokeOpacity="0.28" strokeLinejoin="round"/>
          <line x1="32" y1="50" x2="83" y2="50" stroke={c} strokeWidth="0.9" strokeOpacity="0.28"/>
          <line x1="32" y1="60" x2="83" y2="60" stroke={c} strokeWidth="0.8" strokeOpacity="0.2"/>
          <line x1="32" y1="70" x2="65" y2="70" stroke={c} strokeWidth="0.8" strokeOpacity="0.14"/>
          <line x1="32" y1="82" x2="83" y2="82" stroke={c} strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="3 4"/>
          <line x1="32" y1="92" x2="83" y2="92" stroke={c} strokeWidth="0.8" strokeOpacity="0.2"/>
          <line x1="32" y1="102" x2="83" y2="102" stroke={c} strokeWidth="0.8" strokeOpacity="0.2"/>
          <line x1="32" y1="112" x2="60" y2="112" stroke={c} strokeWidth="0.8" strokeOpacity="0.14"/>
          <line x1="32" y1="130" x2="68" y2="130" stroke={c} strokeWidth="0.8" strokeOpacity="0.22"/>
          <path d="M37 140 L44 147 L55 134" stroke={c} strokeWidth="1.3" strokeOpacity="0.48" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M86 98 L104 80 L108 84 L90 102 Z" stroke={c} strokeWidth="1" strokeOpacity="0.32" fill={c} fillOpacity="0.05"/>
          <path d="M86 98 L81 108 L91 103 Z" fill={c} fillOpacity="0.22"/>
          <line x1="98" y1="86" x2="102" y2="90" stroke={c} strokeWidth="0.8" strokeOpacity="0.28"/>
        </svg>
      )

    default:
      return null
  }
}

const services = [
  {
    num: '01',
    symbol: '◈',
    name: 'Digital Branding Optimization',
    desc: 'We offer tailored logo creation and branding, visually engaging website design, and captivating promotional videos for your online presence. Our services enhance brand recognition and boost engagement across platforms — helping you stand out in a competitive market.',
    tags: ['Logo & Branding', 'Web Design', 'Promo Videos', 'Social Media'],
    featured: true,
    accent: 'gold',
  },
  {
    num: '01a',
    symbol: '▣',
    name: 'Web Design',
    desc: 'Visually appealing, user-friendly websites optimized for all devices. We improve website visibility and boost online engagement — attracting more visitors and converting them into loyal clients.',
    tags: ['Responsive', 'SEO-Optimized'],
    featured: false,
    accent: 'gold',
  },
  {
    num: '01b',
    symbol: '◆',
    name: 'Logo Creation & Branding',
    desc: 'We create captivating brand identities tailored for your website and social media — effectively communicating your unique brand story and driving audience interaction.',
    tags: ['Identity Design', 'Brand Strategy'],
    featured: false,
    accent: 'gold',
  },
  {
    num: '02',
    symbol: '◉',
    name: 'Impact-Driven Solutions',
    desc: 'We help businesses and nonprofits build real community connections through well-executed initiatives that foster engagement and drive measurable impact. Helping you bring people together.',
    tags: ['Community Projects', 'Grant Writing', 'Nonprofits'],
    featured: false,
    accent: 'rust',
  },
  {
    num: '02a',
    symbol: '◈',
    name: 'Strategic Grant Writing',
    desc: 'Assisting organizations in securing funding through compelling grant proposals that align with their mission and goals — maximizing your chances of funding success.',
    tags: ['Funding Strategy', 'Proposal Writing'],
    featured: false,
    accent: 'rust',
  },
] as const

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-ink py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,149,58,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-14 reveal">
          <div>
            <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3">
              <span className="block w-6 h-px bg-gold" />
              What We Do
            </p>
            <h2
              className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(34px, 4.5vw, 58px)' }}
            >
              Two Pillars of<br />Strategic Excellence
            </h2>
          </div>
          <p className="font-body text-[16px] leading-relaxed text-warm lg:max-w-xs lg:pb-1.5">
            Every engagement is built on deep expertise and an unwavering commitment
            to results that matter — for your brand and your community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-d${Math.min(i + 1, 5)} group relative bg-ink-card border rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1 ${
                s.featured ? 'md:col-span-2' : ''
              } ${
                s.accent === 'gold'
                  ? 'border-gold/10 hover:border-gold/28'
                  : 'border-rust/10 hover:border-rust/28'
              }`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                s.accent === 'gold'
                  ? 'bg-gradient-to-br from-gold/[0.05] to-transparent'
                  : 'bg-gradient-to-br from-rust/[0.05] to-transparent'
              }`} />

              {/* Large decorative number — positioned over the image panel */}
              <span
                className={`absolute top-0 right-4 z-20 font-display font-bold italic select-none pointer-events-none leading-none hidden sm:block ${
                  s.accent === 'gold' ? 'text-white/20' : 'text-white/20'
                }`}
                style={{ fontSize: s.featured ? '9rem' : '7rem' }}
              >
                {s.num}
              </span>

              {/* Left: text content — leaves room for illustration on desktop */}
              <div className="relative z-10 p-8 xl:p-10 sm:pr-[37%]">
                {/* Symbol + num */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-lg ${s.accent === 'gold' ? 'text-gold/60' : 'text-rust/60'}`}>
                    {s.symbol}
                  </span>
                  <span className={`font-mono text-[10px] tracking-[2.5px] uppercase ${s.accent === 'gold' ? 'text-gold/50' : 'text-rust/50'}`}>
                    {s.num}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="font-display italic font-semibold text-cream mb-4 leading-tight tracking-tight"
                  style={{ fontSize: s.featured ? 'clamp(24px, 2.8vw, 36px)' : 'clamp(21px, 2vw, 27px)' }}
                >
                  {s.name}
                </h3>

                {/* Description */}
                <p className={`font-body text-[15px] leading-relaxed text-warm ${s.featured ? 'max-w-2xl' : ''}`}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.06] text-cream/80"
                    >
                      <TagIcon tag={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: illustration panel — absolutely positioned, never affects card height */}
              <div className="absolute inset-y-0 right-0 w-[35%] hidden sm:flex items-center justify-center p-6 overflow-hidden">
                {/* <ServiceIllustration num={s.num} accent={s.accent} /> */}
                {/* Fade left edge into card background */}
                <div className="absolute inset-0 bg-gradient-to-r from-ink-card via-ink-card/10 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
