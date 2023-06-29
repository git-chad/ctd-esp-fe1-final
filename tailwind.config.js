/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'drop-shadow-yellow': 'drop-shadow(0 0 4px yellow)',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}