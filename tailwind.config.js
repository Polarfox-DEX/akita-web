const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      gray: {
        ...colors.gray,
        '200': '#ebebeb',
        '500': '#666666',
        '900': '#101010'
      },
      yellow: {
        ...colors.yellow,
        '500': '#ffbf66',
        '600': '#f2ac4a'
      },
      blue: colors.blue
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
