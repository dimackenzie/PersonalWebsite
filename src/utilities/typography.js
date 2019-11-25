import Typography from 'typography'

const headerFontFamily = 'Work Sans'
const bodyFontFamily = 'Open Sans'
const baseFontSize = '16px'

const typography = new Typography({
  title: 'Minimal',
  baseFontSize: baseFontSize,
  baseLineHeight: 1.55,
  scaleRatio: 3.157,
  headerFontFamily: [headerFontFamily, 'sans-serif'],
  bodyFontFamily: [bodyFontFamily, 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: headerFontFamily,
      styles: ['700', '600', '400'],
    },
    {
      name: bodyFontFamily,
      styles: ['700', '400', '300'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
