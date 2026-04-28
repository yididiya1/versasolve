const steps = [
  {
    num: '01',
    title: 'Holistic Solutions',
    desc: 'We begin by understanding your full ecosystem — culture, brand, goals, and community. Our integrated approach considers every dimension of your success, delivering strategies that address root causes rather than symptoms.',
  },
  {
    num: '02',
    title: 'Expertise & Empowerment',
    desc: 'Our proven systems and community-built knowledge inform every strategy. We don\'t just deliver results — we equip your team with the tools and understanding to sustain and grow independently long after our engagement ends.',
  },
  {
    num: '03',
    title: 'Transformative Partnerships',
    desc: 'We act as long-term partners, not one-time vendors. Every relationship is built on trust, transparency, and a shared commitment to meaningful, lasting impact — for your organization and the communities you serve.',
  },
] as const

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-ink-surface py-24 md:py-32 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Subtle background detail */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(191,94,58,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left: Steps ── */}
        <div>
          <p className="font-mono text-[11px] tracking-[3px] uppercase text-gold flex items-center gap-3 mb-3 reveal">
            <span className="block w-6 h-px bg-gold" />
            How We Work
          </p>
          <h2
            className="font-display italic font-semibold text-cream leading-[1.0] tracking-tight mb-12 reveal reveal-d1"
            style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
          >
            A Holistic Path<br />to Your Goals
          </h2>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-d${i + 1} flex gap-6 group ${
                  i < steps.length - 1 ? 'pb-10 mb-0' : ''
                }`}
              >
                {/* Left rail */}
                <div className="flex flex-col items-center gap-0 flex-shrink-0 pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 flex-shrink-0" />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-transparent mt-2" style={{ minHeight: '60px' }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="font-mono text-[10px] text-gold/50 tracking-[2.5px] uppercase block mb-2">
                    Step {step.num}
                  </span>
                  <h3
                    className="font-display italic font-semibold text-cream mb-3 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-warm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="reveal flex items-center justify-center lg:justify-middle">
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">

            {/* Outermost ring */}
            <div
              className="absolute inset-0 rounded-full border border-gold/10 animate-spin-slow"
              style={{ borderStyle: 'dashed' }}
            >
              {/* Dot on ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
            </div>

            {/* Middle ring */}
            <div
              className="absolute inset-[36px] md:inset-10 rounded-full border border-gold/15 animate-spin-reverse"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-rust/50" />
            </div>

            {/* Inner ring */}
            <div className="absolute inset-[72px] md:inset-20 rounded-full border border-gold/20 animate-spin-slow" />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[110px] h-[110px] md:w-[124px] md:h-[124px] rounded-full grid place-items-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(212,149,58,0.15) 0%, rgba(191,94,58,0.08) 100%)',
                  border: '1px solid rgba(212,149,58,0.25)',
                  boxShadow: '0 0 60px rgba(212,149,58,0.12)',
                }}
              >
                <span
                  className="font-display italic font-semibold text-gold leading-none tracking-tight select-none"
                  style={{ fontSize: '2.6rem' }}
                >
                  VS
                </span>
              </div>
            </div>

            {/* Floating labels around the ring */}
            {[
              { label: 'Holistic', angle: -35, dist: 155 },
              { label: 'Expertise', angle: 90, dist: 155 },
              { label: 'Partnership', angle: 210, dist: 155 },
            ].map(({ label, angle, dist }) => {
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * dist
              const y = Math.sin(rad) * dist
              return (
                <div
                  key={label}
                  className="absolute font-mono text-[9px] tracking-[1.5px] uppercase text-warm/50 whitespace-nowrap"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
