/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#a4ffaf",
      secondary: "#4c4b53",
      "light-gray": "#ced2d8",
    },
    fontFamily: {
      "roboto-mono": "Roboto Mono",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
