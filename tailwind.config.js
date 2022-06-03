module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        transitionInLeft: {
          '0%': { transform: 'translateX(-120%)' },
        },

        transitionInRight: {
          '0%': { transform: 'translateX(120%)' },
        },

        transitionInTop: {
          '0%': { transform: 'translateY(150px)' },
        }
      },
      animation: {
        transitionInLeft: 'transitionInLeft 0.4s ease-in-out 1',
        transitionInRight: 'transitionInRight 0.4s ease-in-out 1',
        transitionInTop: 'transitionInTop 0.4s ease-in-out 1',
      }
    },
  },
  plugins: [],
}