const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ['Poppins', ...defaultTheme.fontFamily.sans],
    }
    }
  },
}
