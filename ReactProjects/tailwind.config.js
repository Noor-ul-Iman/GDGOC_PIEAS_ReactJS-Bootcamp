/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97706', // amber-600
          dark: '#B45309',    // amber-700
          light: '#FCD34D',   // amber-300
        },
        secondary: {
          DEFAULT: '#92400E', // amber-800
          dark: '#78350F',    // amber-900
          light: '#FBBF24',   // amber-400
        },
        background: {
          DEFAULT: '#FFFBEB', // amber-50
          dark: '#FEF3C7',    // amber-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}