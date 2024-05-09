/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      new:["Protest Revolution","sans-serif"],
      kode:["Kode Mono","monospace"],
      lucky:["Luckiest Guy","cursive"],
      orbitron:["Orbitron","sans-serif"],
      foldit:["Foldit","sans-serif"],
      poppins:["Poppins","sans-serif"]
    },
  },
  plugins: [],
}