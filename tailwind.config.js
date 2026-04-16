/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F0BB78",
          red: "#F24847",
          blue: "#53ACDD",
        },
      },
      fontFamily: {
        display: ["GardaEmpty", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
