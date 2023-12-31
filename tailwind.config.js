/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: `#000000`,
      mainDark: `#272727`,
      mainWhite: `#FDFDFD`,
      mainContrast: `#C4FE76`,
      fadeContrast: `#9EEA6C`,
      darkGrey: "#333333",
      lightGrey: "#7F7F7F",
      errorRed: `#CC0000`,
    },
  },
  plugins: [],
};
