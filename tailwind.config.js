const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      body: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        navbarBackground: "#2B2728",
        bodyBackground: "#333030",
        primaryGreen: "#19D938",
      },
    },
  },
  variants: {},
  plugins: [],
}
