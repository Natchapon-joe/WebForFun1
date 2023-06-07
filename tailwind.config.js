/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "1320px", // ปรับค่า md เป็น 1320px
    },
  },
  plugins: [],
};
