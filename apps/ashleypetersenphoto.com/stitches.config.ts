import { createStitches } from '@stitches/react'
import {
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  indigo,
  indigoA,
  indigoDark,
  indigoDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  yellow,
  yellowA,
  yellowDark,
  yellowDarkA,
  blackA,
} from '@radix-ui/colors'

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...grayA,
        ...green,
        ...greenA,
        ...indigo,
        ...indigoA,
        ...red,
        ...redA,
        ...yellow,
        ...yellowA,

        accentBase: '$indigo1',
        accentBgSubtle: '$indigo2',
        accentBg: '$indigo3',
        accentBgA: '$indigo3A',
        accentBgHover: '$indigo4',
        accentBgActive: '$indigo5',
        accentLine: '$indigo6',
        accentBorder: '$indigo7',
        accentBorderHover: '$indigo8',
        accentSolid: '$indigo9',
        accentSolidHover: '$indigo10',
        accentText: '$indigo11',
        accentTextContrast: '$indigo12',

        successBase: '$green1',
        successBgSubtle: '$green2',
        successBg: '$green3',
        successBgA: '$green3A',
        successBgHover: '$green4',
        successBgActive: '$green5',
        successLine: '$green6',
        successBorder: '$green7',
        successBorderHover: '$green8',
        successSolid: '$green9',
        successSolidHover: '$green10',
        successText: '$green11',
        successTextContrast: '$green12',

        warningBase: '$yellow1',
        warningBgSubtle: '$yellow2',
        warningBg: '$yellow3',
        warningBgA: '$yellow3A',
        warningBgHover: '$yellow4',
        warningBgActive: '$yellow5',
        warningLine: '$yellow6',
        warningBorder: '$yellow7',
        warningBorderHover: '$yellow8',
        warningSolid: '$yellow9',
        warningSolidHover: '$yellow10',
        warningText: '$yellow11',
        warningTextContrast: '$yellow12',

        dangerBase: '$red1',
        dangerBgSubtle: '$red2',
        dangerBg: '$red3',
        dangerBgA: '$red3A',
        dangerBgHover: '$red4',
        dangerBgActive: '$red5',
        dangerLine: '$red6',
        dangerBorder: '$red7',
        dangerBorderHover: '$red8',
        dangerSolid: '$red9',
        dangerSolidHover: '$red10',
        dangerText: '$red11',
        dangerTextContrast: '$red12',
      },
      shadows: {
        ...blackA,
      },
    },
    media: {
      bp1: '(min-width: 480px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1200px)',
    },
    utils: {
      marginX: value => ({ marginLeft: value, marginRight: value }),
    },
  })

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...grayDarkA,
    ...greenDark,
    ...greenDarkA,
    ...indigoDark,
    ...indigoDarkA,
    ...redDark,
    ...redDarkA,
    ...yellowDark,
    ...yellowDarkA,
  },
})

const GlobalStyles = globalCss({
  body: {
    background: '$gray1',
    color: '$gray12',
  },
  a: {
    textDecoration: 'underline',
    textUnderlineOffset: '1px',
    color: '$accentText',
  },
})

GlobalStyles()
