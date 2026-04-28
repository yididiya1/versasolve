'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const serviceItems = [
  {
    href: '/services/digital-branding',
    symbol: '◈',
    name: 'Digital Branding Optimization',
    desc: 'Logos, web design & promotional videos',
    color: 'gold',
  },
  {
    href: '/services/impact-driven',
    symbol: '◉',
    name: 'Impact-Driven Solutions',
    desc: 'Community projects & grant writing',
    color: 'rust',
  },
]

export default function Nav() {
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const [servicesOpen, setServicesOpen]   = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef  = useRef<HTMLLIElement>(null)
  const closeTimer   = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const closeMobile = () => {
    setMenuOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 xl:px-20 h-[76px] transition-all duration-500 ${
          scrolled
            ? 'bg-ink/95 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-gold to-gold-light grid place-items-center font-display font-bold text-ink text-[15px] italic tracking-tight shadow-[0_0_20px_rgba(212,149,58,0.3)] group-hover:shadow-[0_0_30px_rgba(212,149,58,0.5)] transition-shadow duration-300">
            VS
          </div>
          <span className="font-display font-semibold text-[19px] text-cream tracking-tight italic">
            Versa<span className="text-gold">Solve</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 list-none">

          {/* Services dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 font-body text-[13.5px] text-warm hover:text-cream transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            >
              Services
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel — pt-3 acts as a hover bridge (no dead gap) */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[310px] transition-all duration-200 origin-top ${
                servicesOpen
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {/* Visual panel */}
              <div
                className="rounded-2xl p-2"
                style={{
                  background: 'rgba(19,16,9,0.98)',
                  border: '1px solid rgba(212,149,58,0.14)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(20px)',
                }}
              >
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setServicesOpen(false)}
                  className="flex items-start gap-3.5 px-4 py-3.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-150 no-underline group/item"
                >
                  <span
                    className={`text-[18px] flex-shrink-0 mt-0.5 transition-colors duration-150 ${
                      item.color === 'gold'
                        ? 'text-gold/50 group-hover/item:text-gold/80'
                        : 'text-rust/50 group-hover/item:text-rust/80'
                    }`}
                  >
                    {item.symbol}
                  </span>
                  <div>
                    <p className="font-body font-semibold text-[13.5px] text-cream leading-tight mb-0.5">
                      {item.name}
                    </p>
                    <p className="font-mono text-[10px] tracking-wide text-warm/60">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
              </div>
            </div>
          </li>

          {/* Other nav links */}
          {['Approach', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`/#${item.toLowerCase()}`}
                className="font-body text-[13.5px] text-warm hover:text-cream transition-colors duration-200 no-underline tracking-wide"
              >
                {item}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/#contact"
              className="font-body font-semibold text-[13px] bg-gold text-ink px-6 py-2.5 rounded-full hover:bg-gold-light transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(212,149,58,0.4)] no-underline inline-block"
            >
              Book Free Call
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-cream origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-cream origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-[76px] left-0 right-0 z-40 bg-ink/98 backdrop-blur-xl border-b border-gold/10 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-1">

          {/* Mobile services toggle */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between font-body text-base text-cream py-3.5 border-b border-white/5 bg-transparent border-x-0 border-t-0 rounded-none w-full text-left"
          >
            Services
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              aria-hidden
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile service sub-links */}
          {mobileServicesOpen && (
            <div className="flex flex-col mb-1 border-b border-white/5 pb-1">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="flex items-center gap-2.5 pl-4 py-3 no-underline"
                >
                  <span className={`text-[14px] ${item.color === 'gold' ? 'text-gold/60' : 'text-rust/60'}`}>
                    {item.symbol}
                  </span>
                  <span className="font-body text-[14px] text-cream/80">{item.name}</span>
                </Link>
              ))}
            </div>
          )}

          {['Approach', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={closeMobile}
              className="font-body text-base text-cream py-3.5 border-b border-white/5 no-underline hover:text-gold transition-colors duration-200"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/#contact"
            onClick={closeMobile}
            className="mt-4 font-body font-semibold text-sm bg-gold text-ink px-6 py-3 rounded-full text-center no-underline"
          >
            Book Free Call
          </Link>
        </div>
      </div>
    </>
  )
}
