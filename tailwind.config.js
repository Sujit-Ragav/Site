/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: ["Amatic SC", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      fontSize: {
        "11xl": "11rem",
      },
      colors: {
        60: "#F7F7F7",
        30: "#020202",
        10: "#40E0D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
