/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Open-sans, sans-serif',
    },
    boxShadow: {
      "custom-shadow": "0 4px 4px #00000029",
    },
    extend: {
      colors: {
        background: {
            DEFAULT: '#1D232A'
        },
        primary: {
          DEFAULT: '#2C343A'
        },
        secundary: {
          DEFAULT: '#15191C'
        },
        button: {
          DEFAULT: '#0480DC'
        },
        text: {
          DEFAULT: "#FFFFFF",
          200: '#95999C'
        }
      }
    },
  },
  plugins: [],
}
