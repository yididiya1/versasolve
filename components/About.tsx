import Image from 'next/image'

const credentials = [
  'Psychology & Holistic Health BA',
  'Leadership & Org Studies MA',
  'University of Southern Maine',
  '5 Continents',
  'Winchester, London',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-page py-24 md:py-32 px-6 md:px-14 xl:px-24 overflow-hidden"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 h-[500px] w-[500px]"
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(212,149,58,0.12) 0%, transparent 60%)' }}
        />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── Mission & Vision ── */}
        <div
          className="reveal glass-card relative mb-20 md:mb-24 overflow-hidden rounded-2xl px-8 md:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center"
        >
          <div
            className="pointer-events-none absolute -top-1/4 -left-[8%] h-[140%] w-[45%]"
            style={{ background: 'radial-gradient(circle at center, rgba(212,149,58,0.16) 0%, transparent 65%)' }}
          />
          <div className="relative">
            <span className="eyebrow mb-4">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Mission &amp; Vision</span>
            </span>
            <h3
              className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mt-4 mb-8"
              style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}
            >
              A future where every organization grows with clarity, confidence, and{' '}
              <span className="text-gradient-warm">purpose</span>
            </h3>

            {/* Mission */}
            <div className="mb-7">
              <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold-dark mb-2.5">Mission</div>
              <p className="font-body text-[15.5px] leading-relaxed text-deep-soft border-l-2 border-gold-dark/30 pl-6">
                VersaSolve builds and maintains websites, brands, and digital visibility for
                organizations across New England , so the quality of their digital presence
                matches the quality of their work.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-gold-dark mb-2.5">Vision</div>
              <p className="font-body text-[15.5px] leading-relaxed text-deep-soft border-l-2 border-gold-dark/30 pl-6">
                A New England where every organization , nonprofit, small business, or founder-led
                venture , treats its digital presence as a continuously improving organizational
                asset: not a one-time deliverable, not an afterthought, but a living system tended
                with the same care as their finances or their programs.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge shadow-[0_20px_50px_-20px_rgba(42,31,18,0.4)]">
            <Image
              src="/images/community-team.jpg"
              alt="A team of professionals collaborating around a conference table"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(160deg, transparent 55%, rgba(26,20,13,0.35))' }} />
          </div>
        </div>

        {/* ── The Approach ── */}
        <div className="mb-20 md:mb-24">
          {/* Header + lead */}
          <div className="reveal max-w-3xl mb-10 md:mb-14">
            <span className="eyebrow mb-5">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">The Approach</span>
            </span>
            <h3
              className="font-display italic font-semibold text-deep leading-[1.02] tracking-tight mt-5 mb-6"
              style={{ fontSize: 'clamp(28px, 3.6vw, 46px)' }}
            >
              Not a one-time project , a living{' '}
              <span className="text-gradient-warm">system</span>
            </h3>
            <p className="font-body text-[16px] md:text-[17.5px] leading-relaxed text-deep-soft">
              Most digital work is treated as a project: build, launch, forget , repeat in three
              years. <span className="text-deep font-medium">VersaSolve runs it as a system instead.</span>
            </p>
          </div>

          {/* Lifecycle , three phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Phase 01 , Build */}
            <div className="reveal reveal-d1 card-lift glass-card relative overflow-hidden rounded-2xl p-7 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg font-mono text-[12px] font-semibold text-[#1A140D]"
                  style={{ background: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)' }}
                >
                  01
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-deep-mute">Build</span>
              </div>
              <h4 className="font-display italic font-semibold text-deep text-[21px] leading-tight mb-2.5">
                The foundation
              </h4>
              <p className="font-body text-[14.5px] leading-relaxed text-deep-soft">
                Website, brand, and visibility setup , done right from the start.
              </p>
            </div>

            {/* Phase 02 , VersaCare (highlighted) */}
            <div
              className="reveal reveal-d2 card-lift relative overflow-hidden rounded-2xl border p-7 md:p-8"
              style={{
                background: 'linear-gradient(165deg, rgba(240,180,84,0.16), rgba(212,149,58,0.05))',
                borderColor: 'rgba(160,106,31,0.34)',
              }}
            >
              <div
                className="pointer-events-none absolute -right-[12%] -top-1/3 h-[150%] w-[60%]"
                style={{ background: 'radial-gradient(circle at center, rgba(212,149,58,0.2) 0%, transparent 65%)' }}
              />
              <div className="relative mb-5 flex items-center gap-3">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg font-mono text-[12px] font-semibold text-[#1A140D]"
                  style={{ background: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)' }}
                >
                  02
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-gold-dark">Maintain · then we stay</span>
              </div>
              <h4 className="relative font-display italic font-semibold text-deep text-[21px] leading-tight mb-2.5">
                VersaCare<span className="align-super text-[11px] not-italic">™</span>
              </h4>
              <p className="relative font-body text-[14.5px] leading-relaxed text-deep-soft">
                Every project routes into our monthly oversight system , your digital presence
                monitored, refined, and improved, month after month.
              </p>
            </div>

            {/* Phase 03 , Infrastructure */}
            <div className="reveal reveal-d3 card-lift glass-card relative overflow-hidden rounded-2xl p-7 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg font-mono text-[12px] font-semibold text-[#1A140D]"
                  style={{ background: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)' }}
                >
                  03
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-deep-mute">Compound</span>
              </div>
              <h4 className="font-display italic font-semibold text-deep text-[21px] leading-tight mb-2.5">
                Digital infrastructure
              </h4>
              <p className="font-body text-[14.5px] leading-relaxed text-deep-soft">
                It stops being a deliverable and becomes a measurable asset you manage like any
                other core operational system.
              </p>
            </div>
          </div>

          {/* Payoff */}
          <div className="reveal reveal-d4 mt-7 flex items-start gap-5 pl-1">
            <span className="mt-1 h-12 w-[3px] flex-shrink-0 rounded-full bg-gradient-to-b from-gold-light to-rust" />
            <p
              className="font-display italic text-deep-soft leading-snug"
              style={{ fontSize: 'clamp(18px, 2vw, 25px)' }}
            >
              For New England&apos;s organizations doing meaningful work, that&apos;s the difference
              between a website that looks good in <span className="text-deep-mute not-italic font-body font-medium">2026</span>{' '}
              and one that still works in{' '}
              <span className="text-gradient-warm not-italic font-body font-semibold">2030</span>.
            </p>
          </div>
        </div>

        {/* ── Owner grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">

          {/* Visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative max-w-[440px] mx-auto lg:mx-0">
              {/* Photo frame */}
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(42,31,18,0.12)]"
                style={{
                  background: 'linear-gradient(160deg, rgba(212,149,58,0.18) 0%, rgba(231,223,208,1) 100%)',
                  border: '1px solid rgba(160,106,31,0.18)',
                }}
              >
                <Image
                  src="/images/abedom.avif"
                  alt="Abedom Gebreyesus , Founder & Principal Consultant"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Decorative diagonal stripe */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(212,149,58,0.02) 40px, rgba(212,149,58,0.02) 41px)',
                  }}
                />
              </div>

              {/* Credential badge , floating */}
              <div className="glass-card absolute -bottom-5 -right-5 md:right-0 p-5 rounded-xl text-center">
                <div className="font-display italic font-semibold text-gradient-warm text-[28px] leading-none mb-1">
                  MA
                </div>
                <div className="font-mono text-[9px] text-deep-mute tracking-[1.5px] uppercase leading-tight">
                  Leadership &<br />Org Studies
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-5 reveal">
              <span className="eyebrow-dot" />
              <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Meet the Founder</span>
            </span>

            <h2
              className="font-display italic font-semibold text-deep leading-[0.95] tracking-tight mb-2 mt-5 reveal reveal-d1"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)' }}
            >
              Abedom<br /><span className="text-gradient-warm">Gebreyesus</span>
            </h2>
            <p className="font-mono text-[11px] tracking-[2.5px] uppercase text-gold-dark/80 mb-8 reveal reveal-d1">
              Founder & Principal Consultant
            </p>

            <div className="space-y-4 font-body text-[15.5px] leading-relaxed text-deep-soft mb-8 reveal reveal-d2">
              <p>
                Abedom Gebreyesus is the Founder and Principal Consultant of VersaSolve
                Consulting LLC. His journey began across Ethiopia, Eritrea, and Kenya before
                bringing him to the United States, where he spent his formative years in
                Massachusetts before making his home in Maine.
              </p>
              <p>
                Abedom earned a Bachelor of Science in Health Sciences with minors in Psychology
                and Holistic Health (2022) and a Master of Arts in Leadership and Organizational
                Studies (2023) from the University of Southern Maine. His passion for learning and
                cultural understanding has taken him across five continents , Africa, Asia, Europe,
                North America, and South America , including a study abroad experience at the
                University of Winchester in England. These experiences have shaped his belief that
                meaningful growth happens when strategy, innovation, and human connection come
                together. Through VersaSolve, he helps organizations build stronger digital
                foundations that support long-term growth, visibility, and impact.
              </p>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mb-10 reveal reveal-d3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 font-mono text-[10px] tracking-[1px] uppercase text-deep-soft px-3.5 py-2 rounded-full border border-edge bg-white/60 backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#F0B454,#C75B39)' }} />
                  {c}
                </span>
              ))}
            </div>

            <a
              href="https://calendar.app.google/TRNg4J99aZ2spjC88"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-warm reveal reveal-d4 inline-flex items-center gap-2 font-body font-semibold text-[14px] px-7 py-3.5 rounded-full no-underline"
            >
              Work With Abedom
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7h10M8 3.5 11.5 7 8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
