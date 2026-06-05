import Image from 'next/image'

type Project = {
  name: string
  domain: string
  href: string
  desc: string
  tagline: string
  accent: 'gold' | 'rust'
  /** Real screenshot under /public/porfolio. Falls back to a generated preview if omitted. */
  image?: string
}

const projects: Project[] = [
  {
    name: 'New American Association of Massachusetts',
    domain: 'naamass.org',
    href: '#',
    tagline: 'Empowering New Beginnings for Refugees and Immigrants',
    desc: 'Brand identity and a welcoming digital home for a nonprofit serving refugees and immigrants across Massachusetts — built to inform, engage, and drive donations.',
    accent: 'gold',
    image: '/porfolio/portfolio1.png',
  },
  {
    name: 'NAAM Artisans',
    domain: 'naamartisans.org',
    href: '#',
    tagline: 'Empowering Women through Skill Training, Community, and Opportunity',
    desc: 'A vibrant storefront and program site celebrating the craft and stories of New American women artisans.',
    accent: 'gold',
    image: '/porfolio/portfolio0.png',
  },
  {
    name: 'Meridian CFO',
    domain: 'meridiancfo.com',
    href: '#',
    tagline: 'Senior financial leadership, without the senior salary.',
    desc: 'A sharp, credibility-first site positioning fractional CFO services for founder-led companies.',
    accent: 'rust',
    image: '/porfolio/portfolio2.png',
  },
  {
    name: 'Coastal Family Health Network',
    domain: 'coastalfamilyhealth.org',
    href: '#',
    tagline: 'Healthcare that meets you where you are.',
    desc: 'Patient-centered web design for a coastal Maine community health nonprofit.',
    accent: 'gold',
    image: '/porfolio/portfolio3.png',
  },
  {
    name: 'Northern Compass Workforce Initiative',
    domain: 'northerncompass.org',
    href: '#',
    tagline: "Connecting Northern New England's workforce to the jobs of the next decade.",
    desc: 'A clear, mission-driven platform connecting workers to in-demand careers and training.',
    accent: 'rust',
    image: '/porfolio/portfolio4.png',
  },
]

const tint = {
  gold: { bg: 'linear-gradient(160deg,#fdf8ed 0%,#f6e8cf 100%)', text: 'text-gold-dark', dot: 'linear-gradient(135deg,#F0B454,#C75B39)' },
  rust: { bg: 'linear-gradient(160deg,#fdf2ee 0%,#f1dad0 100%)', text: 'text-rust-dark', dot: 'linear-gradient(135deg,#d07558,#8a3f22)' },
} as const

function SitePreview({ project }: { project: Project }) {
  const t = tint[project.accent]
  return (
    <div className="flex flex-col overflow-hidden bg-white aspect-[16/10]">
      {/* Browser chrome */}
      <div className="flex h-8 shrink-0 items-center gap-3 border-b border-edge bg-page-soft/80 px-3.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-deep/15" />
          <span className="h-2 w-2 rounded-full bg-deep/15" />
          <span className="h-2 w-2 rounded-full bg-deep/15" />
        </div>
        <span className="truncate rounded-full border border-edge bg-white px-3 py-0.5 font-mono text-[9px] tracking-wide text-deep-mute">
          {project.domain}
        </span>
      </div>

      {/* Preview body */}
      {project.image ? (
        <div className="relative flex-1">
          <Image
            src={project.image}
            alt={`${project.name} website`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="relative flex-1 overflow-hidden px-6 py-5" style={{ background: t.bg }}>
          {/* faux nav */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-md" style={{ background: t.dot }} />
              <span className="h-1.5 w-12 rounded-full bg-deep/15" />
            </div>
            <div className="hidden gap-2 sm:flex">
              <span className="h-1.5 w-7 rounded-full bg-deep/10" />
              <span className="h-1.5 w-7 rounded-full bg-deep/10" />
              <span className="h-1.5 w-7 rounded-full bg-deep/10" />
            </div>
          </div>
          {/* faux hero copy */}
          <p className={`font-display italic font-semibold leading-[1.05] tracking-tight ${t.text}`}
            style={{ fontSize: 'clamp(15px, 2vw, 22px)' }}>
            {project.tagline}
          </p>
          <div className="mt-4 flex gap-2">
            <span className="h-5 w-20 rounded-full" style={{ background: t.dot }} />
            <span className="h-5 w-16 rounded-full border border-deep/15" />
          </div>
          {/* fade into card */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/70 to-transparent" />
        </div>
      )}
    </div>
  )
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-page-soft py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-6%] top-0 h-[420px] w-[520px]"
          style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)' }} />
        <div className="absolute left-[-8%] bottom-[5%] h-[400px] w-[460px]"
          style={{ background: 'radial-gradient(circle, rgba(58,143,201,0.09) 0%, transparent 65%)' }} />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_2fr] gap-12 lg:gap-16">
        {/* Header */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow mb-5 reveal">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Our Work</span>
          </span>
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-5 reveal reveal-d1"
            style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
          >
            Our <span className="text-gradient-warm">Portfolio</span>
          </h2>
          <p className="font-body text-[15.5px] leading-relaxed text-deep-soft max-w-sm reveal reveal-d2">
            From identity systems to community initiatives, every project we take on is a
            partnership — and every result reflects the strategy, intention, and craft behind it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`reveal reveal-d${Math.min(i + 1, 5)} glass-card card-lift group block overflow-hidden rounded-2xl no-underline`}
            >
              <SitePreview project={p} />
              <div className="p-6 xl:p-7">
                <h3 className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-2.5"
                  style={{ fontSize: 'clamp(19px, 1.7vw, 23px)' }}>
                  {p.name}
                </h3>
                <p className="font-body text-[14.5px] leading-relaxed text-deep-soft mb-5">
                  {p.desc}
                </p>
                <span className={`inline-flex items-center gap-1.5 font-body font-semibold text-[13.5px] ${tint[p.accent].text}`}>
                  Visit Website
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
