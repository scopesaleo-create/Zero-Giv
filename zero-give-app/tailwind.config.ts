import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070a',
        panel: '#0a0d12',
        surface: '#10141c',
        edge: '#1a1f2b',
        accent: '#1FA8FF',
        'accent-dim': '#0c6dbf',
        glow: '#7cd3ff',
        off: '#9aa3b2',
        border: 'hsl(220 14% 18%)',
        card: 'hsl(220 24% 6%)',
        'card-foreground': 'hsl(0 0% 98%)',
        'muted-foreground': 'hsl(220 9% 60%)',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.35', transform: 'scale(.85)' },
        },
        'hot-pulse': {
          '0%': { transform: 'scale(.6)', opacity: '1' },
          '100%': { transform: 'scale(1.45)', opacity: '0' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
        drop: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.12) translate(-2%, -1%)' },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease .25s 1 forwards',
        spin: 'spin 60s linear infinite',
        pulse: 'pulse 2.4s ease-in-out infinite',
        'hot-pulse': 'hot-pulse 2.4s ease-out infinite',
        marquee: 'marquee 40s linear infinite',
        drop: 'drop 2s ease-in-out infinite',
        'ken-burns': 'ken-burns 10s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
