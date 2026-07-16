import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0d0a06',
          surface: '#131009',
          card: '#1d1810',
        },
        gold: {
          DEFAULT: '#d4953a',
          light: '#e5b05e',
          dark: '#a06a1f',
          deep: '#7a4f15',
          pale: '#f2d9a8',
        },
        rust: {
          DEFAULT: '#bf5e3a',
          light: '#d07558',
          dark: '#8a3f22',
        },
        // Natural complementary accents , break the warm duotone
        sage: {
          DEFAULT: '#4f9e72',
          light: '#88c79f',
          dark: '#3a7457',
        },
        azure: {
          DEFAULT: '#3a8fc9',
          light: '#7cc3f0',
          dark: '#2f6ea3',
        },
        plum: {
          DEFAULT: '#8b6fd6',
          light: '#b79bf0',
          dark: '#6f54b8',
        },
        cream: '#ece7dd',
        warm: '#7a6d5c',
        // Light theme palette
        page: {
          DEFAULT: '#faf5ec',
          soft: '#f3ead8',
        },
        paper: {
          DEFAULT: '#ffffff',
          warm: '#fdf8ed',
        },
        deep: {
          DEFAULT: '#2a1f12',
          soft: '#4a3a28',
          mute: '#7a6650',
        },
        edge: {
          DEFAULT: '#e7dfd0',
          soft: '#efe7d5',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          to: { transform: 'rotate(-360deg)' },
        },
        revealUp: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.4)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 0.6s ease both',
        ticker: 'ticker 36s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
        'spin-reverse': 'spinReverse 30s linear infinite',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
