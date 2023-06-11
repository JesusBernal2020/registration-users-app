/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8EFF8B',
        'secondary': '#c1fdc5',
        'tertiary': '#3c3c3d',
        'quaternary': '#888888',
        'quinary': '#D85D5D',
      }
    },
  },
  plugins: [],
}

