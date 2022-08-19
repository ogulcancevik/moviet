module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    },
    extend: {
      colors: {
        'custom-red': '#DD2626'
      },
      width: {
        'detail-poster': '400px'
      }
    }
  },
  plugins: []
}
