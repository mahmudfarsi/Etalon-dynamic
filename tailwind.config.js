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
      width:{
        '16':'16px',
        '21':'21px',
        '110':'110px',
        '180':'180px',
        '207':'207px',
        '208':'208px',
        '300':'300px',
        '342':'342px',
        '330':'330px',
        '450':'450px',
        '480':'480px',
        '650':'650px'
      },

      maxWidth:{
        
      },

      minWidth:{

      },

  

      gap:{

      },


      fontSize:{
        smm:'13px',
        sm:'14px',
        xsm:'16px',
        base:'18px',
        md:'24px',
        'xmd':'25px',
        lg:'30px',
        'xlg':'32px',
        '2xl':'36px',
        '3xl':'40px',
        '4xl':'48px',
        '5xl':'60px',
        '6xl':'112px'
      },


      zIndex:{

      },


      padding:{
        '50px':'50px'
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
        'gray':'rgba(255, 255, 255, 0.2)',
        'gray-card' :'rgba(197, 194, 202, 1)',
        'light-gray':'rgba(233, 233, 233, 1)',
        'gray-span':'rgba(0, 0, 0, 0.6)',
        'opacity-30':'rgba(255, 255, 255, 0.3)',
        'opacity-20':'rgba(255, 255, 255, 0.2)',
        'opacity-025': 'rgba(24, 24, 24, 0.25)'
    
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

