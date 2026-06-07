'use client'
import { useState } from 'react'

const videos = [
  { id: '1ZAvu-SQ0kGMvKTZfzyx0HKd7FYn48mZw', title: 'Promotional Film', label: 'Brand Story', accent: '#D98A2B' },
  { id: '1Zuh3ePfoGY_BV9lUHBt7KkiouMfKRymA', title: 'Promotional Reel', label: 'Social Media', accent: '#bf5e3a' },
]

export default function PromoVideos() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((v, i) => (
        <div key={v.id} className={`reveal reveal-d${i + 1} glass-card card-lift overflow-hidden rounded-2xl`}>
          <div className="relative aspect-video bg-[#120E09]">
            {active === v.id ? (
              <iframe
                src={`https://drive.google.com/file/d/${v.id}/preview`}
                title={v.title}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                onClick={() => setActive(v.id)}
                aria-label={`Play ${v.title}`}
                className="group/btn absolute inset-0 flex items-center justify-center overflow-hidden"
              >
                {/* Branded poster */}
                <div className="absolute inset-0"
                  style={{ background: `radial-gradient(circle at 50% 38%, ${v.accent}40, transparent 60%), linear-gradient(165deg,#211A11,#120E09)` }} />
                <div className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />
                {/* Play button */}
                <span
                  className="relative grid h-16 w-16 place-items-center rounded-full text-[#1A140D] transition-transform duration-300 group-hover/btn:scale-110"
                  style={{ background: 'linear-gradient(135deg,#F0B454,#D98A2B 48%,#C75B39)', boxShadow: '0 12px 30px rgba(216,138,43,.45)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                {/* Label */}
                <span className="absolute left-4 top-4 rounded-full border border-[#E8A33D]/25 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[2px] text-[#E8A33D] backdrop-blur-sm">
                  Promotional Video
                </span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 p-5">
            <div>
              <h3 className="font-display italic font-semibold text-deep text-[18px] leading-tight tracking-tight">
                {v.title}
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[1.5px] text-deep-mute">{v.label}</p>
            </div>
            {active !== v.id && (
              <span className="font-body text-[12.5px] font-semibold text-gold-dark whitespace-nowrap">▶ Watch</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
