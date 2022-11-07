/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'flx-pink': '#e0bbee',
        'flx-purple':' #865a93',
        "fig-purple": "#441555",
        'flx-yello': '#ceb30d',
        'flx-brown': '#745d3f',
        'pink': {
          1000: '#B9409E',
          1100: '#CE79BB'
        },
        'purple': {
          1000: '#441555'
        }
      }
    },
  },
  plugins: [],
};
