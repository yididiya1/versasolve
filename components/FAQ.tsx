import { FAQS } from '@/lib/siteData'

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-page-soft py-24 md:py-32 px-6 md:px-14 xl:px-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-[6%] h-[380px] w-[420px]"
          style={{ background: 'radial-gradient(circle, rgba(212,149,58,0.1) 0%, transparent 65%)' }} />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Left: intro */}
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow mb-5 reveal">
            <span className="eyebrow-dot" />
            <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">Questions &amp; Answers</span>
          </span>
          <h2
            className="font-display italic font-semibold text-deep leading-[1.0] tracking-tight mb-5 reveal reveal-d1"
            style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
          >
            Frequently asked <span className="text-gradient-warm">questions</span>
          </h2>
          <p className="font-body text-[15.5px] leading-relaxed text-deep-soft max-w-sm reveal reveal-d2">
            Straight answers on how VersaSolve Consulting works , from AEO and GEO to VersaCare,
            Google Ad Grants, and getting started.
          </p>
        </div>

        {/* Right: accordion */}
        <div className="reveal reveal-d2 divide-y divide-edge rounded-2xl border border-edge bg-white/60 backdrop-blur-sm">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 md:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 md:py-6">
                <h3 className="font-display italic font-semibold text-deep text-[17px] md:text-[19px] leading-snug tracking-tight">
                  {f.q}
                </h3>
                <span
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-edge text-gold-dark transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="font-body text-[14.5px] md:text-[15px] leading-relaxed text-deep-soft pb-6 pr-10 -mt-1">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
