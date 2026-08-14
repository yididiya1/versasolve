/**
 * Comparative content renders as a real <table>, not prose; tables are far more reliably
 * extracted and quoted than a paragraph describing the same relationships.
 * Cells accept ReactNode so a row can carry a link or emphasis without losing structure.
 */
export default function DataTable({
  columns,
  rows,
  caption,
  minWidth = 720,
}: {
  columns: React.ReactNode[]
  rows: React.ReactNode[][]
  caption?: string
  minWidth?: number
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-edge">
      <table className="w-full border-collapse bg-white/60 text-left" style={{ minWidth }}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-edge">
            {columns.map((c, i) => (
              <th
                key={i}
                scope="col"
                className={
                  i === 0
                    ? 'p-4 md:p-5 font-mono text-[10.5px] uppercase tracking-[1.5px] text-deep-mute align-bottom'
                    : 'p-4 md:p-5 font-display italic font-semibold text-[18px] text-deep align-bottom'
                }
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-edge/70 last:border-0">
              {row.map((cell, c) =>
                c === 0 ? (
                  <th
                    key={c}
                    scope="row"
                    className="p-4 md:p-5 text-left font-body text-[14px] font-semibold leading-relaxed text-deep align-top"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={c} className="p-4 md:p-5 font-body text-[14px] leading-relaxed text-deep-soft align-top">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Yes/no marker for feature-comparison tables. */
export function Yes() {
  return (
    <span className="inline-flex items-center gap-2 font-body text-[14px] text-deep">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className="text-gold-dark shrink-0">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
        <path d="M5 8.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Included
    </span>
  )
}

export function No() {
  return <span className="font-body text-[14px] text-deep-mute/70">Not included</span>
}
