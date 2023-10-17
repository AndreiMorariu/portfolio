/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {},
    container: {
      screens: {
        '2xl': '1100px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
