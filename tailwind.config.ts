import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        navy: {
          950: 'var(--navy-950)',
          900: 'var(--navy-900)',
          800: 'var(--navy-800)',
          700: 'var(--navy-700)',
        },
        brand: {
          600: 'var(--blue-600)',
          500: 'var(--blue-500)',
          50: 'var(--blue-50)',
        },
        accent: {
          500: 'var(--orange-500)',
          400: 'var(--orange-400)',
        },
        ink: {
          950: 'var(--neutral-950)',
          900: 'var(--neutral-900)',
          700: 'var(--neutral-700)',
          500: 'var(--neutral-500)',
          300: 'var(--neutral-300)',
          200: 'var(--neutral-200)',
          100: 'var(--neutral-100)',
          50: 'var(--neutral-50)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.12em', fontWeight: '500' }],
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-l': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-m': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-l': ['1.125rem', { lineHeight: '1.65' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 600ms ease-out both',
        'fade-in': 'fade-in 600ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
