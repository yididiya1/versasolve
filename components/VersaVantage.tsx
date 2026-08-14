'use client'
import { useState } from 'react'

const features = [
  { title: "Website health that's real", desc: 'Live Core Web Vitals from Google , not vanity scores.' },
  { title: 'Show up in AI answers', desc: 'Get found in ChatGPT, Perplexity, and Google AI Overviews.' },
  { title: 'Fix it with AI', desc: 'One-click improvements, drafted in your brand voice.' },
  { title: 'Measure what matters', desc: 'Watch the impact land in your traffic, rankings, and sales.' },
]

export default function VersaVantage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('Please enter a valid email address.')

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    if (!formspreeId) {
      console.error('Missing NEXT_PUBLIC_FORMSPREE_ID: set it in .env.local')
      setErrorMsg('Something went wrong. Please try again later.')
      setStatus('error')
      return
    }

    try {
      setStatus('loading')
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setErrorMsg('Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section
      id="versavantage"
      className="relative overflow-hidden bg-[#120E09] text-[#F6F0E6] py-24 md:py-36 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] right-[-6%] h-[60%] w-[55%] rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle at center, rgba(232,163,61,.2), rgba(199,91,57,.08) 45%, transparent 66%)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] h-[55%] w-[45%] rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle at center, rgba(58,143,201,.16), transparent 62%)' }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 75%)',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 75%)',
          }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
        {/* Left: story */}
        <div>
          <span className="eyebrow mb-5 reveal" style={{ borderColor: 'rgba(232,163,61,0.22)', background: 'rgba(232,163,61,0.06)' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#5BD08A] ring-4 ring-[#5BD08A]/20" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold">Coming Soon</span>
          </span>

          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.03] tracking-[-0.02em] reveal reveal-d1">
            Manage your digital presence like{' '}
            <span className="bg-gradient-to-br from-[#F0B454] via-[#D98A2B] to-[#C75B39] bg-clip-text italic text-transparent">
              critical infrastructure
            </span>
          </h2>

          <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-[#B6A990] reveal reveal-d2">
            <b className="font-semibold text-[#F6F0E6]">VersaVantage™</b> is the AI growth platform for
            small businesses , one place to see exactly where your website and channels stand, fix what&apos;s
            holding them back, and prove the impact. Real performance data, visibility across search and AI
            assistants, and improvements drafted in your own voice.{' '}
            <span className="text-[#F6F0E6]">Growth that compounds, not marketing that exhausts you.</span>
          </p>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-[560px] reveal reveal-d3">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg,#F0B454,#C75B39)' }} />
                <div>
                  <div className="text-[14.5px] font-semibold text-[#F6F0E6]">{f.title}</div>
                  <div className="text-[13px] leading-relaxed text-[#8a7c66]">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: waitlist card */}
        <div className="panel-dark reveal reveal-d2 rounded-2xl p-8 md:p-9">
          <div className="mb-1 flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl font-serif text-sm font-bold text-[#1A140D]"
              style={{ background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)' }}>VV</span>
            <span className="font-display italic text-[20px] font-semibold">VersaVantage™</span>
          </div>
          <p className="mb-6 mt-3 text-[14.5px] leading-relaxed text-[#B6A990]">
            Join the waitlist for early access and shape what we build.
          </p>

          {status === 'success' ? (
            <div className="rounded-xl border border-[#5BD08A]/25 bg-[#5BD08A]/[.08] p-5 text-center">
              <div className="mb-1 text-[15px] font-semibold text-[#F6F0E6]">You&apos;re on the list! 🎉</div>
              <p className="text-[13.5px] leading-relaxed text-[#B6A990]">
                Thanks for your interest , we&apos;ll reach out the moment early access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="vv-email" className="mb-2 block font-mono text-[10.5px] uppercase tracking-[2px] text-[#8a7c66]">
                Work email
              </label>
              <input
                id="vv-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                placeholder="you@organization.org"
                className="w-full rounded-xl border border-white/[.1] bg-white/[.04] px-4 py-3 text-[15px] text-[#F6F0E6] placeholder:text-[#7E7460] outline-none transition focus:border-[#E8A33D]/45 focus:bg-white/[.06]"
              />
              {status === 'error' && (
                <p className="mt-2 text-[12.5px] text-[#d07558]">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 w-full rounded-xl px-6 py-3 text-[15px] font-semibold text-[#1A140D] transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                style={{ background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)', boxShadow: '0 10px 28px rgba(216,138,43,.28), inset 0 1px 0 rgba(255,255,255,.45)' }}
              >
                {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
              </button>
              <p className="mt-3 text-center text-[11.5px] text-[#7E7460]">
                No spam , just one note when we launch.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
