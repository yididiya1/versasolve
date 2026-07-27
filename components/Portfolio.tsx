import Image from 'next/image'
import PromoVideos from './PromoVideos'

type Project = {
  name: string
  href: string
  desc: string
  tagline: string
  accent: 'gold' | 'rust'
  /** Client-owned live domain. Only set for real client work. */
  domain?: string
  /** Concept/spec/demo build. Labeled "Concept Project" and never shown with a client-owned domain. */
  concept?: boolean
  /** Real screenshot under /public/porfolio. Falls back to a generated preview if omitted. */
  image?: string
}

// Real client work , only projects with a live, working URL owned by the client.
const clients: Project[] = [
  {
    name: 'New American Association of Massachusetts',
    domain: 'naamass.org',
    href: 'https://naamass.org/',
    tagline: 'Empowering New Beginnings for Refugees and Immigrants',
    desc: 'Brand identity and a welcoming digital home for a nonprofit serving refugees and immigrants across Massachusetts , built to inform, engage, and drive donations.',
    accent: 'gold',
    image: '/porfolio/portfolio1.png',
  },
  {
    name: 'NAAM Artisans',
    domain: 'naamartisans.org',
    href: 'https://naamartisans.org',
    tagline: 'Empowering Women through Skill Training, Community, and Opportunity',
    desc: 'A vibrant storefront and program site celebrating the craft and stories of New American women artisans.',
    accent: 'gold',
    image: '/porfolio/portfolio0.png',
  },
  {
    name: 'Everwell Allyship',
    domain: 'everwellallyship.com',
    href: 'https://everwellallyship.com/',
    tagline: 'Building Healthier Futures Together',
    desc: 'A warm, trustworthy site for a healthcare allyship mobilizing professionals to expand access to care and health education across the community.',
    accent: 'rust',
    image: '/porfolio/portfolio5.png',
  },
  {
    name: 'University of Southern Maine , ROCC',
    domain: 'usm.maine.edu',
    href: 'https://usm.maine.edu/recovery-oriented-campus-center/recovery-oriented-campus-center/',
    tagline: 'Comprehensive marketing & web strategy for higher education',
    desc: 'A multi-year digital partnership with the Recovery Oriented Campus Center , website, digital marketing, and student training , surfacing programs, events, and impact.',
    accent: 'gold',
    image: '/porfolio/portfolio6.png',
  },
  {
    name: 'Kennedy Park FC',
    domain: 'kennedyparkfc.com',
    href: 'https://kennedyparkfc.com/',
    tagline: 'Community soccer, rooted in Portland, Maine',
    desc: 'Full website design and build for a community sports nonprofit , surfacing programs, schedules, and clear ways to get involved.',
    accent: 'rust',
  },
  {
    name: 'CoworHERS',
    domain: 'coworkhers.com',
    href: 'https://coworkhers.com/',
    tagline: 'A coworking community built for women',
    desc: 'Website review and SEO improvements , boosting search rankings, traffic, and inbound business for a growing small business.',
    accent: 'gold',
  },
]

// Concept builds , not client work. Shown with a visible "Concept Project" label and no client-owned domain.
const concepts: Project[] = [
  {
    name: 'Meridian CFO',
    href: 'https://versasolve-portfolio-3.vercel.app/',
    tagline: 'Senior financial leadership, without the senior salary.',
    desc: 'A sharp, credibility-first concept positioning fractional CFO services for founder-led companies.',
    accent: 'rust',
    concept: true,
    image: '/porfolio/portfolio2.png',
  },
  {
    name: 'Coastal Family Health Network',
    href: 'https://versasolve-portfolio-2.vercel.app/',
    tagline: 'Healthcare that meets you where you are.',
    desc: 'A patient-centered web design concept for a coastal community health nonprofit.',
    accent: 'gold',
    concept: true,
    image: '/porfolio/portfolio3.png',
  },
  {
    name: 'Northern Compass Workforce Initiative',
    href: 'https://versasolve-portfolio-4.vercel.app/',
    tagline: "Connecting Northern New England's workforce to the jobs of the next decade.",
    desc: 'A clear, mission-driven platform concept connecting workers to in-demand careers and training.',
    accent: 'rust',
    concept: true,
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
          {project.concept ? 'Concept preview' : project.domain}
        </span>
      </div>

      {/* Preview body */}
      <div className="relative flex-1">
        {project.concept && (
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-deep/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[1.5px] text-cream backdrop-blur-sm">
            Concept Project
          </span>
        )}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.concept ? `${project.name} concept design` : `${project.name} website`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative h-full overflow-hidden px-6 py-5" style={{ background: t.bg }}>
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
    </div>
  )
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <a
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
          {p.concept ? 'View Concept' : 'Visit Website'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M2 7h10M8 3.5 11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
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

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-14 reveal">
          <div>
            <span className="eyebrow mb-5">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Our Work</span>
            </span>
            <h2
              className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
            >
              Our <span className="text-gradient-warm">Portfolio</span>
            </h2>
          </div>
          <p className="font-body text-[15.5px] leading-relaxed text-deep-soft lg:max-w-sm lg:pb-1.5">
            From promotional films to full websites, every project we take on is a partnership ,
            and every result reflects the strategy, intention, and craft behind it.
          </p>
        </div>

        {/* Promotional media */}
        <div className="mb-6 flex items-center gap-3 reveal">
          <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Promotional Media</span>
          <span className="h-px flex-1 bg-edge" />
        </div>
        <PromoVideos />

        {/* Client websites */}
        <div className="mt-16 mb-6 flex items-center gap-3 reveal">
          <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Client Websites</span>
          <span className="h-px flex-1 bg-edge" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </div>

        {/* Concept projects */}
        <div className="mt-16 mb-6 flex items-center gap-3 reveal">
          <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-deep-mute">Concept Projects</span>
          <span className="h-px flex-1 bg-edge" />
        </div>
        <p className="mb-6 max-w-2xl font-body text-[13.5px] leading-relaxed text-deep-mute reveal">
          Self-directed concept builds that show our range. These are demonstrations , not client
          engagements , and are not affiliated with any organization of a similar name.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
