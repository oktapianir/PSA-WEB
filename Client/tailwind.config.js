/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
  fontFamily: {
    mont: ['var(--font-mont)', 'sans-serif'],
    hk: ['var(--font-hk)', 'sans-serif'],
  },
},

}
