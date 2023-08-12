/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34ce72",
        typo: "#333",
        caption: "#A6A6A6",
        danger: "#F64949",
      },
    },
  },
  plugins: [],
};
