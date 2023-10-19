/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      fontFamily: {
        monteserrat: ['Montserrat', 'sans-serif',],
        hind: ['Hind', 'sans-serif'],
        samarkan: ['Samarkan', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        Limelight: ['Limelight', 'sans-serif'],
        AnekDevanagari: ['AnekDevanagari', 'sans-serif'],
        Poppins: ['Poppins','sans-serif'],
      },
    backgroundImage: {
      hero: 'url(/src/assets/images/hero.png)'
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widester: '.25em',
    },
    colors: {
      'orange-6': '#FC7538',
      'white-1': '#F8F6F4',
      'gray-1': '#00000091',
      'slate-1':'#59A098',
      'slate-1':'#59A098',
      'orange-7':'#FA5B32',
      'gray-2':'#F8C8BA',
      'slate-2':'#F8F9F4',
      'white-2': '#FFFFFF75',
      'black-1':'#00000061',
      'black-2':' #000000BA',
    },
    boxShadow: {
      'box-1':'0 0 40px rgba(0,0,0,0.8)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },

    },
  },
  plugins: [],
}

