import { indigo, indigoA, indigoDark, indigoDarkA } from '@radix-ui/colors'
import {
  createTheme,
  dark,
  globalCss,
  globalStyles,
} from 'config/stitches.config'

const themeAccents = {
  accentBase: '$indigo1',
  accentBgSubtle: '$indigo2',
  accentBg: '$indigo3',
  accentBgA: '$indigo3A',
  accentBgHover: '$indigo4',
  accentBgActive: '$indigo5',
  accentLine: '$indigo6',
  accentBorder: '$indigo7',
  accentBorderA: '$indigo7A',
  accentBorderHover: '$indigo8',
  accentSolid: '$indigo9',
  accentSolidHover: '$indigo10',
  accentText: '$indigo11',
  accentTextContrast: '$indigo12',
}

export const theme = createTheme({
  colors: {
    ...indigo,
    ...indigoA,
    ...themeAccents,
  },
})

export const darkTheme = createTheme({
  colors: {
    ...dark.colors,
    ...indigoDark,
    ...indigoDarkA,
    ...themeAccents,
  },
})

globalCss(globalStyles)()
