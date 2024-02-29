import { type Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6faef7',
        secondary: '#db6e2c',
      },
      fontFamily: {
        serif: ['var(--font-inter)'],
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
} satisfies Config;
