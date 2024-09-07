/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/index.tsx', './components/**/*.{js,jsx,ts,tsx}'],  
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: '#F0F0F0'
        },
        'primary': {
          DEFAULT: '#FF6B6B'
        },
        'secondary': {
          DEFAULT: '#FFF'
        },
        'text-primary': {
          DEFAULT: '#5F5F5F'
        },
        'text-secondary': {
          DEFAULT: '#A0A0A0'
        }
      }
    },
  },
  plugins: [],
}

