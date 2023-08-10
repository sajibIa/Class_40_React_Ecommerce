/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1602px',
      }, 
      fontFamily: {
        'dm': ['DM Sans'],
      },
      colors: {
        'licolor': '#262626',
        'licolor2': '#767676',
        'paracolor1': '#6D6D6D',
      },
      fontSize:{
        text39:"39px"
      }
    },
  },
  plugins: [],
}

