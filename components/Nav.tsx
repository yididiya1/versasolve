'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#portfolio' },
  { label: 'About', href: '/#about' },
  { label: 'VersaVantage', href: '/#versavantage' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 text-[#F6F0E6] transition-all duration-500 ${
          scrolled
            ? 'bg-[#120E09]/90 backdrop-blur-xl border-b border-[#E8A33D]/10 shadow-[0_8px_30px_rgba(0,0,0,.45)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl font-serif text-lg font-semibold text-[#1A140D]"
                style={{
                  background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)',
                  boxShadow: '0 8px 24px rgba(216,138,43,.32), inset 0 1px 0 rgba(255,255,255,.4)',
                }}
              >
                VS
              </span>
              <span className="font-serif text-xl font-medium">
                Versa<span className="text-[#E8A33D]">Solve</span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-[15px] font-medium text-[#B6A990] no-underline transition hover:bg-white/5 hover:text-[#F6F0E6]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://calendar.app.google/TRNg4J99aZ2spjC88"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-2 rounded-xl px-[22px] py-3 text-[15px] font-semibold text-[#1A140D] no-underline transition hover:-translate-y-px md:inline-flex"
                style={{
                  background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)',
                  boxShadow: '0 10px 28px rgba(216,138,43,.28), inset 0 1px 0 rgba(255,255,255,.45)',
                }}
              >
                Book a call
                <ArrowRight className="transition group-hover:translate-x-0.5" />
              </a>

              {/* Hamburger */}
              <button
                className="flex flex-col gap-[5px] p-2 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block h-[1.5px] w-5 origin-center bg-[#F6F0E6] transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
                <span className={`block h-[1.5px] w-5 bg-[#F6F0E6] transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
                <span className={`block h-[1.5px] w-5 origin-center bg-[#F6F0E6] transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed left-0 right-0 top-[72px] z-40 border-b border-[#E8A33D]/10 bg-[#120E09]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/[.06] py-3.5 text-base text-[#B6A990] no-underline transition-colors hover:text-[#F6F0E6]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://calendar.app.google/TRNg4J99aZ2spjC88"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-xl px-6 py-3 text-center text-sm font-semibold text-[#1A140D] no-underline"
            style={{ background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)' }}
          >
            Book a call
          </a>
        </div>
      </div>
    </>
  )
}

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
