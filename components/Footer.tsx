import Link from 'next/link'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Ecosystem', href: '#approach' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Impact', href: '#impact' },
  { label: 'VersaVantage', href: '#versavantage' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/8 px-6 md:px-14 xl:px-24 py-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-gold to-gold-light grid place-items-center font-display font-bold text-ink text-[12px] italic">
              VS
            </div>
            <span className="font-display italic font-semibold text-[16px] text-cream/80 tracking-tight">
              Versa<span className="text-gold">Solve</span> Consulting
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-mono text-[10px] tracking-[1.5px] uppercase text-warm/60 hover:text-cream/80 transition-colors duration-200 no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>
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
              href="mailto:VersaSolve@gmail.com"
              className="font-mono text-[10.5px] tracking-wide text-warm/60 hover:text-gold transition-colors duration-200 no-underline"
            >
              VersaSolve@gmail.com
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
