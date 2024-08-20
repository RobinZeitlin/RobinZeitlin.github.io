/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {

      colors:{
        'primary' : '#15202B',
        'secondary' : '#253240',
      },

      fontFamily:{
        'main-font' : 'Anek Devanagari'
      }
    },
  },
  plugins: [],
}

