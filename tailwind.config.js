/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vibes: ["var(--font-vibes)", "cursive"],
        garamod: ["var(--font-garamod)", "serif"],
        alex: ["var(--font-alex)", "cursive"],
      },
      colors: {
        trigo: "#eaa33a",
        cocoa: "#7d2c01",
        muted: "#D8CFC2",
        crema: "#fdf6ed",
        rosa: "#f08e80",
      },
    },
  },
  plugins: [],
};
