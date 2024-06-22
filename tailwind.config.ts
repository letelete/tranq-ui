import type { Config } from 'tailwindcss';

import defaultColors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: defaultColors.transparent,
      foreground: {
        solid: 'black',
        primary: 'rgba(0,0,0,0.87)',
        secondary: 'rgba(0,0,0,0.64)',
        hint: 'rgba(0,0,0,0.34)',
        decorative: 'rgba(0,0,0,0.16)',
        destructive: '#ff5151',
      },
    },
    extend: {},
  },
  plugins: [],
} as const satisfies Config

