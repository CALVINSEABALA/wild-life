/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        150:"150px",
        190:"190px",
        225:"225px",
        300:"300px",
        340:"340px",
        350:"350px",
        375:"375px",
        460:"460px",
        656:"656px",
        880:"880px",
        508:"508px",
      },
      height : {
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        650:"650px",
        685:"685px",
        800:"800px",
        "90vh": "90vh",
      },
      minWidth : {
        210:"210px",
        350:"350px",
        620:"620px",
      },
      screens: {
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "xxl":"1536px",
      },
      colors: {
        deepBlue:"#04619F",
        deepBlack:"#000000",
    },
    backgroundImage: {
        'elephant':"src('./src/Assets/logo.png')"      
    },
    boxShadow: {
      'glassInner': 'inset 0 4px 4px 0 rgb(0 0 0 / 0.05)',
      'glassOuter':'10px 10px 20px -10px rgba(255, 255, 255, 0.2)',
      'glass': '13px 10px 20px -10px rgba(255, 255, 255, 0.2), inset 0px 20px 30px -5px rgba(255, 255, 255, 0.2)',
    }
  },
  },
  plugins: [],
}