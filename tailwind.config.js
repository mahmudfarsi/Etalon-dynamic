/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato','sans-serif'],
        roboto:['Roboto','sans-serif']
      },
      screens:{
        'smm':'300px'
        // => @media (min-width: 330px) { ... }
      },
      fontWeight:{
        black:'900',
        bold:'700',
        medium:'500',
        normal:'400',
        light:'300'
      },
      colors:{
        'white':'#fff',
        'black':'#000',
        'yellow':'rgba(253, 222, 103, 1)',
        'green':'rgba(59, 95, 71, 1)',
        'darkgreen':'rgba(27, 45, 34, 1)',
        'lineargreens':['rgba(42, 64, 50, 1)','rgba(58, 94, 70, 1)'],
        'light-blue':'#1BD9F2',
        'light-green':'#1BF2C4',
        'gray':'rgba(255, 255, 255, 0.2)',
        'gray-card' :'rgba(197, 194, 202, 1)',
        'light-gray':'rgba(233, 233, 233, 1)',
        'gray-span':'rgba(0, 0, 0, 0.6)',
        'opacity-30':'rgba(255, 255, 255, 0.3)',
        'opacity-20':'rgba(255, 255, 255, 0.2)',
        'opacity-025': 'rgba(24, 24, 24, 0.25)'
    
      },
      padding:{
        '50px':'50px'
      },
      borderRadius:{
        '8px':'8px'
      }
    },
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

