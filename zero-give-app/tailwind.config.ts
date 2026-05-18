import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        graphite: '#141414',
        slate: '#1c1c1c',
        bone: '#ede8df',
        paper: '#f4f1ea',
        sand: '#cdc6b5',
        rule: 'rgba(237,232,223,0.12)',
        signal: '#d6ff3d',
        ember: '#ff5a1f',
        off: '#9a9489',
        border: 'rgba(237,232,223,0.10)',
        card: '#141414',
        'card-foreground': '#ede8df',
        'muted-foreground': '#8c887e',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        widest: '0.28em',
      },
      keyframes: {
        spin: { to: { transform: 'rotate(360deg)' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        'rule-in': { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        spin: 'spin 120s linear infinite',
        marquee: 'marquee 60s linear infinite',
        'rule-in': 'rule-in 1.1s cubic-bezier(.7,0,.2,1) forwards',
        'fade-up': 'fade-up .9s cubic-bezier(.16,1,.3,1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
