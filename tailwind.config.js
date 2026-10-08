import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: '#39FF14',
        dark: '#0A0A0A',
        dim: '#1E1E1E',
        surface: '#111111',
        line: '#262626',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(57, 255, 20, 0.35), 0 0 32px -6px rgba(57, 255, 20, 0.45)',
      },
    },
  },
  plugins: [],
}
