/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["anton"],
      },
      colors: {
        background: "#edf2f7",
        white: "#ffff",
        "primary-red": "#eb2c2c",
        "second-red": "#e90718",
        "font-gray": "#728197",
      },
    },
  },
  plugins: [],
};
