import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        carbon: '#0F0F0F',
        steel: '#141414',
        graphite: '#171717',
        slate: '#1F1F1F',
        bone: '#F5F4F0',
        paper: '#F5F4F0',
        ash: '#A3A29D',
        off: '#6E6D69',
        rule: 'rgba(245,244,240,0.08)',
        'rule-strong': 'rgba(245,244,240,0.18)',
        accent: '#E11D2A',
        'accent-deep': '#B30A16',
        // legacy aliases — keep old class names valid
        signal: '#E11D2A',
        ember: '#E11D2A',
        sand: '#A3A29D',
        border: 'rgba(245,244,240,0.08)',
        card: '#111111',
        'card-foreground': '#F5F4F0',
        'muted-foreground': '#6E6D69',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'mono-xs': ['11px', { lineHeight: '1.2', letterSpacing: '0.22em' }],
        'mono-sm': ['12px', { lineHeight: '1.2', letterSpacing: '0.18em' }],
        'display-xs': ['clamp(32px, 4vw, 48px)', { lineHeight: '0.96', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(40px, 5vw, 64px)', { lineHeight: '0.94', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(56px, 8vw, 104px)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(72px, 12vw, 160px)', { lineHeight: '0.88', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(96px, 18vw, 240px)', { lineHeight: '0.84', letterSpacing: '-0.055em' }],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        wide: '0.12em',
        widest: '0.22em',
      },
      maxWidth: {
        container: '1440px',
      },
      keyframes: {
        marquee: { to: { transform: 'translateX(-50%)' } },
        'rule-in': { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        'rule-in': 'rule-in 1.1s cubic-bezier(.7,0,.2,1) forwards',
        'fade-up': 'fade-up .9s cubic-bezier(.16,1,.3,1) forwards',
        'pulse-dot': 'pulse-dot 2.4s cubic-bezier(.4,0,.2,1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
