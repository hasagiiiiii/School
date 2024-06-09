/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        'screen-minus-300':'calc(100vh - 140px)'
      },
      borderColor:{
        'borderBoxCreatePosts': '#8a898921' 
      }
    },
  },
  plugins: [],
};
