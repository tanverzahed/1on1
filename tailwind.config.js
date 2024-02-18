/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html",
            "./src/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
  theme: {
    fontFamily:{
      'montserrat': ['Montserrat', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
  },
}

