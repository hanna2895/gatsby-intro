import Typography from "typography"

import '../fonts/fonts.css';

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  bodyFontFamily: ["GlacialIndifference", "serif"],
})


export default typography
export const rhythm = typography.rhythm
