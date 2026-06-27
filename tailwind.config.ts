import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Indian Tricolor inspired
        'saffron': {
          50: '#fff7ed',
          100: '#ffedc9',
          200: '#ffd966',
          300: '#ffb84d',
          400: '#ff8c00',
          500: '#ff6b35',
          600: '#e84a1c',
          700: '#b83a15',
          800: '#8f2d10',
          900: '#6d2314',
        },
        'india-white': '#f5f5f5',
        'india-green': {
          50: '#f0f7f0',
          100: '#d4edda',
          200: '#a8dbb5',
          300: '#7dc896',
          400: '#52b577',
          500: '#1b7d4a',
          600: '#146b3e',
          700: '#0d5932',
          800: '#084726',
          900: '#03351a',
        },
        'india-blue': '#004b87',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(255, 107, 53, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(255, 107, 53, 0.6)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite',
      },
      boxShadow: {
        'glow-saffron': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-green': '0 0 20px rgba(27, 125, 74, 0.3)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
