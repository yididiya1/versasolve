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

const stepHues = [
  { grad: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)', solid: '#a06a1f', shadow: 'rgba(216,138,43,0.28)' },
  { grad: 'linear-gradient(135deg,#88c79f,#4f9e72 50%,#3a7457)', solid: '#3a7457', shadow: 'rgba(79,158,114,0.28)' },
  { grad: 'linear-gradient(135deg,#7cc3f0,#3a8fc9 50%,#2f6ea3)', solid: '#2f6ea3', shadow: 'rgba(58,143,201,0.28)' },
] as const

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-page-soft py-24 md:py-32 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Atmosphere — multi-hue */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-4%] top-[8%] h-[420px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(79,158,114,0.12) 0%, transparent 65%)' }}
        />
        <div
          className="absolute left-[-6%] top-[40%] h-[380px] w-[380px]"
          style={{ background: 'radial-gradient(circle, rgba(58,143,201,0.1) 0%, transparent 65%)' }}
        />
        <div
          className="absolute right-[20%] bottom-0 h-[320px] w-[320px]"
          style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)' }}
        />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ── Left: Steps ── */}
        <div>
          <span className="eyebrow mb-5 reveal">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">How We Work</span>
          </span>
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-12 reveal reveal-d1"
            style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
          >
            A Holistic Path<br />to <span className="text-gradient-warm">Your Goals</span>
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
                  <div
                    className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl font-mono text-[12px] font-bold text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: stepHues[i].grad, boxShadow: `0 8px 20px ${stepHues[i].shadow}` }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ minHeight: '60px', background: `linear-gradient(to bottom, ${stepHues[i].solid}55, transparent)` }} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <span className="font-mono text-[10px] tracking-[2.5px] uppercase block mb-2" style={{ color: stepHues[i].solid, opacity: 0.8 }}>
                    Step {step.num}
                  </span>
                  <h3
                    className="font-display italic font-semibold text-deep mb-3 leading-tight tracking-tight"
                    style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-deep-soft">
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

            {/* Ambient glow behind rings */}
            <div className="absolute inset-[18%] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.22) 0%, transparent 70%)', filter: 'blur(30px)' }} />

            {/* Outermost ring */}
            <div
              className="absolute inset-0 rounded-full border border-gold-dark/25 animate-spin-slow"
              style={{ borderStyle: 'dashed' }}
            >
              {/* Dot on ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{ background: 'linear-gradient(135deg,#F0B454,#C75B39)' }} />
            </div>

            {/* Middle ring */}
            <div
              className="absolute inset-[36px] md:inset-10 rounded-full border border-sage/40 animate-spin-reverse"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-sage" />
            </div>

            {/* Inner ring */}
            <div className="absolute inset-[72px] md:inset-20 rounded-full border border-azure/40 animate-spin-slow">
              <div className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-azure" />
            </div>

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[110px] h-[110px] md:w-[124px] md:h-[124px] rounded-full grid place-items-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(240,180,84,0.95) 0%, rgba(217,138,43,0.9) 48%, rgba(199,91,57,0.92) 100%)',
                  boxShadow: '0 18px 50px rgba(216,138,43,0.4), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <span
                  className="font-display italic font-semibold text-[#1A140D] leading-none tracking-tight select-none"
                  style={{ fontSize: '2.6rem' }}
                >
                  VS
                </span>
              </div>
            </div>

            {/* Floating labels around the ring */}
            {[
              { label: 'Holistic', angle: -35, dist: 155, color: '#a06a1f' },
              { label: 'Expertise', angle: 90, dist: 155, color: '#3a7457' },
              { label: 'Partnership', angle: 210, dist: 155, color: '#2f6ea3' },
            ].map(({ label, angle, dist, color }) => {
              const rad = (angle * Math.PI) / 180
              const x = Math.cos(rad) * dist
              const y = Math.sin(rad) * dist
              return (
                <div
                  key={label}
                  className="absolute flex items-center gap-1.5 font-mono text-[9px] tracking-[1.5px] uppercase whitespace-nowrap"
                  style={{
                    left: '50%',
                    top: '50%',
                    color,
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <span className="h-1 w-1 rounded-full" style={{ background: color }} />
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
