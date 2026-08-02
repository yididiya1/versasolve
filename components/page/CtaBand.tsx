import { BOOKING_URL, CTA_LABEL, EMAIL } from '@/lib/siteData'

/** Closing conversion band. Booking link is primary; email is the no-friction fallback. */
export default function CtaBand({ heading, body }: { heading: React.ReactNode; body: string }) {
  return (
    <section
      className="relative overflow-hidden px-6 md:px-14 xl:px-24 py-20 md:py-24"
      style={{ background: 'linear-gradient(180deg, #f4ecdb 0%, #faf5ec 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[320px] w-[560px] -translate-x-1/2 -translate-y-1/2 blur-2xl"
          style={{ background: 'radial-gradient(ellipse, rgba(212,149,58,0.16) 0%, transparent 62%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2
          className="font-display italic font-semibold text-deep leading-[1.02] tracking-tight mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          {heading}
        </h2>
        <p className="mx-auto max-w-lg font-body text-[16.5px] leading-relaxed text-deep-soft mb-8">{body}</p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-warm inline-flex items-center gap-2 rounded-[13px] px-8 py-4 text-base font-semibold no-underline"
          >
            {CTA_LABEL}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-[13px] border border-edge bg-white/60 px-8 py-4 text-base font-semibold text-deep no-underline transition hover:bg-white"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
