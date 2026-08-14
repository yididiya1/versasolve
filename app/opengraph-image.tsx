import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VersaSolve Consulting · Web design, branding & AI-search visibility in New England'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'radial-gradient(120% 120% at 15% 10%, #1d1810 0%, #120E09 55%, #0d0a06 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Brand mark + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '92px',
              height: '92px',
              borderRadius: '22px',
              background: 'linear-gradient(150deg, #E7A93F 0%, #D2942E 55%, #A9741F 100%)',
              color: '#1B160F',
              fontSize: '46px',
              fontWeight: 700,
              letterSpacing: '-2px',
            }}
          >
            VS
          </div>
          <div style={{ display: 'flex', fontSize: '34px', color: '#F6F0E6', fontWeight: 600 }}>
            <span>Versa</span>
            <span style={{ color: '#E8A33D' }}>Solve</span>
            <span style={{ color: '#B6A990', fontWeight: 400 }}>&nbsp;Consulting</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '62px', color: '#F6F0E6', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-1.5px', maxWidth: '900px' }}>
            Web design, branding &amp; AI-search visibility
          </div>
          <div style={{ fontSize: '30px', color: '#D8A22B', fontWeight: 500 }}>
            Built to be found, and maintained so it stays that way.
          </div>
        </div>

        {/* Footer line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '24px', color: '#B6A990' }}>
          <span>Portland, Maine</span>
          <span style={{ color: '#5a5040' }}>•</span>
          <span>New England</span>
          <span style={{ color: '#5a5040' }}>•</span>
          <span>versasolveconsulting.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
