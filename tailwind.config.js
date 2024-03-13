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
        '40':'40px',
        '110':'110px',
        '180':'180px',
        '207':'207px',
        '208':'208px',
        '300':'300px',
        '303':'303px',
        '342':'342px',
        '330':'330px',
        '450':'450px',
        '480':'480px',
        '650':'650px',
        '900':'900px',
        '1120':'1120px',
        '1320':'1320px'
      },

      maxWidth:{
        '185':'185px',
        '189':'189px',
        '550':'550px'
      },

      minWidth:{
        '95':'95px',
        '139':'139px',
        '300':'300px',
        '900':'900px'
      },

      height:{
        '21':'21px',
        '16':'16px',
        '40':'40px',
        '110':'110px',
        '413':'413px',
        '449':'449px',
        '500':'500px',
        '550':'550px'
      },

      minHeight:{
        '245':'245px',
        '440':'440px'
      },


  

      gap:{
        '10':'10px',
        '15':'15px',
        '22':'22px',
        '30':'30px',
        '32':'32px',
        '35':'35px',
        '40':'40px',
        '50':'50px',
        '70':'70px',
        '80':'80px'
      },

      margin:{
        '-15px':'-15px',
        '-1px':'-1px',
        '-5px':'-5px',
        '10px':'10px',
        '15px':'15px',
        '20px':'20px',
        '27px':'27px',
        '40px':'40px',
        '45px':'45px',
        '50px':'50px',
        '60px':'60px',
        '69px':'69px',
        '90px':'90px',
        '190px':'190px'
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
        '5.5xl':'64px',
        '6xl':'112px'
      },


      zIndex:{
        '999':'999',
        '998':'998',
        '1000':'1000'
      },


      padding:{
        '0px':'0px',
        '5px':'5px',
        '10px':'10px',
        '15px':'15px',
        '16px':'16px',
        '17px':'17px',
        '19px':'19px',
        '20px':'20px',
        '22px':'22px',
        '25px':'25px',
        '30px':'30px',
        '40px':'40px',
        '50px':'50px',
        '80px':'80px',
        '100px':'100px',
        '150px':'150px'
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

