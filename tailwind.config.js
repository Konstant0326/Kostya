/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },

      fontFamily: {
        'title-font':['Marcellus', 'serif'],
        'main-font':['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
