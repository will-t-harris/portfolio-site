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
        primary: "#19D938",
        primaryDark: "#0E771F",
        primaryLight: "#96EDA4",
        secondary: "#FF7D05",
        secondaryDark: "#8C4503",
        secondaryLight: "#FFB876",
        accent: "#FF0545",
        accentDark: "#BA0433",
        accentLight: "#FF8DAA",
      },
    },
  },
  variants: {},
  plugins: [],
}
