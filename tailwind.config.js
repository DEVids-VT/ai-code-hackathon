import { withTV } from 'tailwind-variants/transformer';

/** @type {import('tailwindcss').Config} */
export default withTV({
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ff505: '#FFE505',
      },
    },
  },
  plugins: [],
});
