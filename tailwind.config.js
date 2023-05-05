/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        skew: 'skew 2s linear infinite',
      },
      keyframes: {
        skew: {
          '0% 100%': {
            transform: "skewX(0deg)",
          },
          '50%': {
            transform: "skewX(6deg)",
          }
        }
      },
      rotate: {
        'profil': '314deg'
      },
      opacity: {
        'profil': '.98',
        'tema': '.97'
      }
    },
  },
  plugins: [],
}

