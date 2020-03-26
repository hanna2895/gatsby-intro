import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"

import '../fonts/fonts.css';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  // headerFontFamily: [
  //   "LeagueGothic",
  //   "sans-serif",
  // ],
  bodyFontFamily: ["GlacialIndifference", "serif"],
})

// typography.injectStyles();
// export default typography

// kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
//   'h2': {
//     fontSize: '1.3rem',
//   }
// })

// const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
