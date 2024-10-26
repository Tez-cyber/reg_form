/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter"
      },
      colors: {
        bright: "#ff8000",
        pale: "#fff0e0",
        newGrey: "#f7f7fc"
      }
    },
  },
  plugins: [],
}

