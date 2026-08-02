/**
 * A self-contained answer block. The H2 is phrased as a real user query and the body is
 * written to survive being quoted out of context — explicit nouns, no dangling pronouns
 * pointing at the previous section.
 *
 * `tone` alternates the background so consecutive sections stay visually separated.
 */
export default function Section({
  id,
  heading,
  intro,
  tone = 'page',
  width = 'wide',
  children,
}: {
  id?: string
  heading: string
  intro?: React.ReactNode
  tone?: 'page' | 'soft'
  width?: 'wide' | 'narrow'
  children?: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 md:px-14 xl:px-24 py-20 md:py-28 ${
        tone === 'soft' ? 'bg-page-soft' : 'bg-page'
      }`}
    >
      {tone === 'soft' && (
        <div className="pointer-events-none absolute inset-0">
          <div className="grid-faint absolute inset-0" />
        </div>
      )}

      <div className={`relative z-10 mx-auto ${width === 'narrow' ? 'max-w-[900px]' : 'max-w-[1200px]'}`}>
        <h2
          className="font-display italic font-semibold text-deep leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}
        >
          {heading}
        </h2>

        {intro && (
          <div className="max-w-2xl font-body text-[16.5px] leading-relaxed text-deep-soft mb-10 space-y-4">
            {intro}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
