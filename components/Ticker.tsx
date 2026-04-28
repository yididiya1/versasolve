const items = [
  'Digital Branding Optimization',
  'Web Design',
  'Logo Creation & Branding',
  'Promotional Videos',
  'Community Project Excellence',
  'Strategic Grant Writing',
  'Organizational Culture Strategy',
  'Impact-Driven Solutions',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="border-y border-gold/10 bg-ink-surface py-4 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="font-mono text-[11.5px] text-warm tracking-[2px] uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-gold/40 text-[8px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
