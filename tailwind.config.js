/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#87b5b5',
        textColor: "#c0d8d8",
        headerColor: "#4aa3a3"
      }
    },
  },
  plugins: [],
}