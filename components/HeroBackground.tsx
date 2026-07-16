'use client'

interface HeroBackgroundProps {
  /**
   * Path to a video file in /public , e.g. "/hero-bg.mp4"
   * Leave undefined to use the animated gradient mesh fallback.
   */
  videoSrc?: string
  /** 0–1 opacity of the video layer. Default 0.22 */
  videoOpacity?: number
}

export default function HeroBackground({
  videoSrc,
  videoOpacity = 0.22,
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>

      {/* ── Optional video layer ────────────────────────────────────── */}
      {/* DROP YOUR VIDEO: place your .mp4 in /public, then pass        */}
      {/* videoSrc="/hero-bg.mp4" to <HeroBackground /> in Hero.tsx     */}
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoOpacity }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* ── Animated gradient orbs (always rendered) ─────────────── */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-orb hero-orb-4" />
      <div className="hero-orb hero-orb-5" />

      {/* ── Cinematic light sweep ─────────────────────────────────── */}
      <div className="hero-light-sweep" />

      {/* ── Dot-grid texture ──────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(212,149,58,0.55) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          opacity: 0.028,
        }}
      />

      {/* ── Radial vignette , keeps text readable ─────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 80% at 50% 50%, transparent 25%, rgba(13,10,6,0.88) 100%)',
        }}
      />

      {/* ── Bottom fade into next section ─────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #0d0a06 100%)',
        }}
      />

      {/* ── Top darkening , nav legibility ────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,10,6,0.6) 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
