/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1240px',
          xl: '1240px',
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(1deg, rgba(2, 55, 135, 0.9) 0.69%, rgba(81, 38, 174, 0.47) 100.48%, rgba(38, 92, 174, 0.01) 100.49%, rgba(195, 195, 196, 0.01) 100.5%, #76A6EF 100.51%)',
        promo: `url('/promo.png')`,
      },
      colors: {
        backgroundColorVector: '#FFC839',
      },
      boxShadow: {
        cardShadow: '0px 4px 59px -14px rgba(171, 124, 0, 0.29)'
      }
    },
  },
  plugins: [],
}
