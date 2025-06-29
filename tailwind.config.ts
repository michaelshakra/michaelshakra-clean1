import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emea: {
          light: '#f3f9f8',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
};

export default config;
