import Image from 'next/image'

const proofs = [
  'Annual speaker for the United Way Loan Executive Program',
  'Trusted advisor for cultural and community-rooted projects',
  'Proven track record with mission-driven organizations',
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 flex-shrink-0">
      <circle cx="12" cy="12" r="10" stroke="#E8A33D" strokeOpacity="0.4" strokeWidth="1.4" />
      <path d="M8 12.2l2.6 2.6L16 9.4" stroke="#E8A33D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-[#120E09] text-[#F6F0E6] py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[15%] right-[-6%] h-[60%] w-[55%] rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle at center, rgba(232,163,61,.18), rgba(199,91,57,.07) 45%, transparent 66%)' }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 35%, black, transparent 75%)',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 35%, black, transparent 75%)',
          }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <span className="eyebrow mb-5 reveal" style={{ borderColor: 'rgba(232,163,61,0.22)', background: 'rgba(232,163,61,0.06)' }}>
          <span className="eyebrow-dot" />
          <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold">Our Impact</span>
        </span>
        <h2 className="font-serif text-[clamp(2rem,4.2vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.01em] max-w-2xl reveal reveal-d1">
          A proven track record with{' '}
          <span className="bg-gradient-to-br from-[#F0B454] via-[#D98A2B] to-[#C75B39] bg-clip-text italic text-transparent">
            mission-driven organizations
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-stretch">
          {/* Left: stat + proofs */}
          <div className="panel-dark reveal reveal-d2 flex flex-col justify-center rounded-2xl p-8 md:p-10">
            <div className="font-serif text-[clamp(3.5rem,7vw,5.5rem)] font-medium leading-none">
              <span className="bg-gradient-to-br from-[#F0B454] via-[#D98A2B] to-[#C75B39] bg-clip-text text-transparent">300%</span>
            </div>
            <div className="mt-2 font-display italic text-[22px] font-semibold">Growth in digital footprint</div>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#B6A990]">
              &ldquo;A significant jump in our digital footprint through website enhancements and
              digital marketing by over 300 percent.&rdquo;
            </p>
            <p className="mt-2.5 font-mono text-[10.5px] uppercase tracking-[1.5px] text-[#7E7460]">
              Christopher Corson · USM ROCC
            </p>

            <div className="my-7 h-px bg-white/[.1]" />

            <ul className="space-y-3.5">
              {proofs.map((p) => (
                <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-[#D8CDBA]">
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: featured USM ROCC partnership */}
          <div className="panel-dark reveal reveal-d3 group relative overflow-hidden rounded-2xl transition-all duration-300 hover:border-gold/35 hover:shadow-[0_24px_60px_rgba(212,149,58,0.16)]">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/usm-rocc.jpg"
                alt="University of Southern Maine campus"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(18,14,9,.15) 0%, rgba(18,14,9,.55) 70%, #1A140D 100%)' }} />
              <span
                className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#1A140D]"
                style={{ background: 'linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)', boxShadow: '0 8px 24px rgba(216,138,43,.35)' }}
              >
                ★ Featured Partnership
              </span>
            </div>
            <div className="p-8 md:p-10">
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold">Higher Education</div>
              <h3 className="font-display italic font-semibold leading-tight tracking-tight text-[26px] md:text-[32px]">
                University of Southern Maine ROCC
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#B6A990]">
                Strategic partner , delivering comprehensive marketing and web strategy solutions
                for higher-education initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
