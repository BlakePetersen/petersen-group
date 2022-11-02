import { slate, slateA, slateDark, slateDarkA } from '@radix-ui/colors'
import {
  createTheme,
  dark,
  globalCss,
  globalStyles,
} from 'config/stitches.config'

export const theme = createTheme({
  colors: {
    ...slate,
    ...slateA,

    accentBase: '$slate1',
    accentBgSubtle: '$slate2',
    accentBg: '$slate3',
    accentBgA: '$slate3A',
    accentBgHover: '$slate4',
    accentBgActive: '$slate5',
    accentLine: '$slate6',
    accentBorder: '$slate7',
    accentBorderA: '$slate7A',
    accentBorderHover: '$slate8',
    accentSolid: '$slate9',
    accentSolidHover: '$slate10',
    accentText: '$slate11',
    accentTextContrast: '$slate12',
  },
})

export const darkTheme = createTheme({
  colors: {
    ...dark.colors,
    ...slateDark,
    ...slateDarkA,
  },
})

globalCss({
  body: {
    ...globalStyles.body,
    fontFamily: "'Open Sans', sans-serif",
  },
  a: {
    color: '$accentBorderHover',

    '&:hover': {
      color: '$accentBorder',
    },
  },
  p: {
    lineHeight: '1.5rem',
  },
})()
