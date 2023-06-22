/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1200px'},
      'md': {'max': '991px'},
      'sm': {'max': '768px'},
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#f72585',
        'secondary': '#323946',
        'tertiary': '#1f242d',
      },
      boxShadow: {
        'button': '0 0 1rem',
        'search': '0 0 2rem'
      }
    }
  },
  plugins: [],
}

