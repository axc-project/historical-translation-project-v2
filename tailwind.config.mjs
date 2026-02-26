/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1e3c',
          light: '#1a3060',
          dark: '#08142a',
        },
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
          bright: '#e8b923',
          pale: '#f5e6a3',
        },
        cream: {
          DEFAULT: '#f8f3e8',
          dark: '#ede5d0',
          warm: '#faf6ee',
        },
        parchment: '#f0e9d6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
