import Link from 'next/link'
import { SERVICES, type ServiceKey } from '@/lib/siteData'

type Hue = 'gold' | 'azure' | 'plum' | 'sage' | 'teal' | 'rust'
type IconName = 'web' | 'branding' | 'media' | 'visibility' | 'care'

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
    case 'web':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <line x1="3" y1="8.2" x2="21" y2="8.2" />
          <line x1="9.5" y1="21" x2="14.5" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    case 'branding':
      return (
        <svg {...common}>
          <path d="M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5 10.3 7.8 12 3z" />
          <path d="M18.5 14.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z" />
        </svg>
      )
    case 'media':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M10.5 9.2l4.2 2.8-4.2 2.8V9.2z" />
        </svg>
      )
    case 'visibility':
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6" />
          <line x1="15" y1="15" x2="20.5" y2="20.5" />
          <path d="M10.5 7.6l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" />
        </svg>
      )
    case 'care':
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5.5c0 4.2-3 6.7-7 8.5-4-1.8-7-4.3-7-8.5V6l7-3z" />
          <path d="M8.8 12l2 2 4-4.4" />
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
  rust:  { solid: '#a64a2a', mark: 'rgba(191,94,58,0.14)',  glow: 'rgba(191,94,58,0.10)' },
}

const meta: Record<ServiceKey, { icon: IconName; hue: Hue; tags: string[] }> = {
  website:   { icon: 'web',        hue: 'azure', tags: ['Mobile-first', 'Conversion-focused', 'Modern stack'] },
  brand:     { icon: 'branding',   hue: 'gold',  tags: ['Logo & identity', 'Color & type', 'Messaging'] },
  video:     { icon: 'media',      hue: 'plum',  tags: ['Short-form video', 'Reels', 'Social-ready'] },
  visibility:{ icon: 'visibility', hue: 'teal',  tags: ['SEO', 'AEO', 'GEO'] },
  versacare: { icon: 'care',       hue: 'sage',  tags: ['Security & updates', 'Backups', 'Monthly reporting'] },
}

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
            From your first website to ongoing care, we build, maintain, and make your organization
            visible — in Google search and in AI assistants like ChatGPT, Claude, and Perplexity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => {
            const m = meta[s.key]
            const c = palette[m.hue]
            const num = String(i + 1).padStart(2, '0')
            // center a lone last card when the count is odd (2-col grid, gap-5)
            const orphan = i === SERVICES.length - 1 && SERVICES.length % 2 === 1
            return (
              <div
                key={s.key}
                className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift group relative rounded-2xl overflow-hidden${orphan ? ' md:col-span-2 md:mx-auto md:w-[calc(50%_-_10px)]' : ''}`}
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
                  {num}
                </span>

                {/* Text content */}
                <div className="relative z-10 p-8 xl:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span style={{ color: c.solid }}>
                      <ServiceIcon name={m.icon} size={30} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[2.5px] uppercase" style={{ color: c.solid, opacity: 0.75 }}>
                      Service {num}
                    </span>
                  </div>

                  <h3
                    className="font-display italic font-semibold text-deep mb-4 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(21px, 2vw, 28px)' }}
                  >
                    {s.name}
                  </h3>

                  <p className="font-body text-[15px] leading-relaxed text-deep-soft">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 rounded-full border border-edge bg-white/60 text-deep-soft backdrop-blur-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.solid }} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {s.key === 'visibility' && (
                    <Link
                      href="/ai-search-visibility"
                      className="mt-6 inline-flex items-center gap-1.5 font-body font-semibold text-[13.5px] no-underline"
                      style={{ color: c.solid }}
                    >
                      How AI search visibility works
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1">
                        <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
