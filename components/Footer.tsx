import Link from 'next/link'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gold/8 px-6 md:px-14 xl:px-24 py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-gold to-gold-light grid place-items-center font-display font-bold text-ink text-[12px] italic">
            VS
          </div>
          <span className="font-display italic font-semibold text-[16px] text-cream/80 tracking-tight">
            Versa<span className="text-gold">Solve</span>
          </span>
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-6">
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

        {/* Copyright */}
        <p className="font-mono text-[10px] text-warm/40 tracking-wide">
          © {new Date().getFullYear()} <span className="text-gold/60">VersaSolve Consulting</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
