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
      },
      gridTemplateRows: {
        "12": "repeat(12, 1fr)",
      },
    },
  },
  variants: {},
  plugins: [],
}
