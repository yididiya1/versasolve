import Link from 'next/link'
import { BOOKING_URL, CTA_LABEL } from '@/lib/siteData'

/**
 * Standalone-page hero. `lead` carries the page's extraction answer: the 40–70 word
 * direct response to the page's core question, with no preamble, so an answer engine can
 * lift it whole. Keep it self-contained: explicit nouns, no reference back to the H1.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  secondary,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: React.ReactNode
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden bg-page px-6 md:px-14 xl:px-24 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[360px] w-[680px] -translate-x-1/2"
          style={{ background: 'radial-gradient(ellipse, rgba(200,134,42,0.12) 0%, transparent 70%)' }}
        />
        <div className="grid-faint absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="eyebrow mb-6">
          <span className="eyebrow-dot" />
          <span className="font-mono text-[10.5px] uppercase tracking-[2.5px] text-gold-dark">{eyebrow}</span>
        </span>

        <h1
          className="font-display italic font-semibold text-deep leading-[1.02] tracking-tight"
          style={{ fontSize: 'clamp(34px, 5vw, 62px)' }}
        >
          {title}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl font-body text-[17px] md:text-[18.5px] leading-relaxed text-deep-soft">
          {lead}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-warm inline-flex items-center gap-2 rounded-[13px] px-7 py-[15px] text-base font-semibold no-underline"
          >
            {CTA_LABEL}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-[13px] border border-edge bg-white/60 px-7 py-[15px] text-base font-semibold text-deep no-underline transition hover:bg-white"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
