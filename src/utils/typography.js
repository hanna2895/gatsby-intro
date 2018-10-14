import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  'h2': {
    fontSize: '1.3rem',
  }
})

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm
