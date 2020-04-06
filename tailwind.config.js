const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      body: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        navbarBackground: "#2B2728",
      },
    },
  },
  variants: {},
  plugins: [],
}
