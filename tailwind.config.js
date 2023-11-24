/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'teko': ['Teko', 'sans-serif'],
      'mukta': ['Mukta', 'sans-serif'],
      'orbitron': ['Orbitron', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [require("daisyui")],
}

