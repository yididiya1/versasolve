import Link from 'next/link'
import { EMAIL } from '@/lib/siteData'

/**
 * Grouped so the four standalone service pages are reachable from every page on the site.
 * Orphaned routes get crawled late and cited less, which would undercut the reason these
 * pages exist. About and Contact point at real routes now, not homepage anchors.
 */
const linkGroups: ReadonlyArray<{ title: string; items: ReadonlyArray<{ label: string; href: string }> }> = [
  {
    title: 'Services',
    items: [
      { label: 'Website Design & Build', href: '/services/web-design' },
      { label: 'SEO, AEO & GEO', href: '/services/seo-aeo-geo' },
      { label: 'Brand Identity', href: '/services/brand-identity' },
      { label: 'VersaCare', href: '/services/versacare' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Impact', href: '/#impact' },
      { label: 'VersaVantage', href: '/#versavantage' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'AI Visibility Guide', href: '/ai-search-visibility' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/8 px-6 md:px-14 xl:px-24 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 self-start no-underline">
            <img src="/images/logo-mark-gold.svg" alt="" aria-hidden className="h-7 w-auto" />
            <span className="font-display italic font-semibold text-[16px] text-cream/80 tracking-tight">
              Versa<span className="text-gold">Solve</span> Consulting
            </span>
          </Link>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                {/* Not a heading element: these labels would otherwise inject three H2s
                    into every page's outline, competing with the real section headings. */}
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[2px] text-warm/50">{group.title}</p>
                <ul className="space-y-2">
                  {group.items.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="font-mono text-[10px] tracking-[1.5px] uppercase text-gold/80 hover:text-gold transition-colors duration-200 no-underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/[.06]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-warm/40 tracking-wide">
            © {new Date().getFullYear()} <span className="text-gold/60">VersaSolve Consulting LLC</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-[10.5px] tracking-wide text-warm/60 hover:text-gold transition-colors duration-200 no-underline"
            >
              {EMAIL}
            </a>
            <a
              href="https://www.versasolveconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10.5px] tracking-wide text-warm/60 hover:text-gold transition-colors duration-200 no-underline"
            >
              www.versasolveconsulting.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
