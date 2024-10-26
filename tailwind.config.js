import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        redColorChange: {
          '0%': {backgroundColor: 'white'},
          '100%' : {backgroundColor: '#FCA5A5'}
        },
      }
    },
    animation: {
      appear: 'appear 0.5s ease-in-out',
      disappear: 'disappear 2s ease-in-out',
      redColorChange: 'redColorChange 0.5s forwards ease-in-out',
    },
    /*
    colors: {
      'main-color' : '#f1ede8',
      'secondary-color' : '#e8f1ed',
      'third-color' : '#ede8f1',
      'white' : '#ffffff'
    }*/
  },
  plugins: [
    require('daisyui'),
  ]
}

