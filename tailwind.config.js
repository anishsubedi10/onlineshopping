/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ff: "450px",
        ef: "1150px",
      },
    },
  },
  plugins: [],
};
