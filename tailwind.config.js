/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height:{
        'screen-minus-300':'calc(100vh - 140px)',
        'full-minus-140':'calc(100% - 140px)'
      },
      borderColor:{
        'borderBoxCreatePosts': '#8a898921' 
      },
      flex:{
        '2': '1 1 40%'
      },
      boxShadow:{
        'neumorphismButton' : '5px 5px 7px #656565,-5px -5px 7px #ffffff',
        'viewMenu' :' 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
        'hoverExcerise':'0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)'
      }
    },
  },
  plugins: [],
};
