import { createStitches } from '@stitches/react'
import {
  blackA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  yellow,
  yellowA,
  yellowDark,
  yellowDarkA,
} from '@radix-ui/colors'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...grayA,
      ...green,
      ...greenA,
      ...red,
      ...redA,
      ...yellow,
      ...yellowA,

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
      ...grayA,
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

export const dark = {
  colors: {
    ...grayDark,
    ...grayDarkA,
    ...greenDark,
    ...greenDarkA,
    ...redDark,
    ...redDarkA,
    ...yellowDark,
    ...yellowDarkA,
  },
}

export const globalStyles = {
  body: {
    background: '$gray1',
    color: '$gray12',
  },
  a: {
    textDecoration: 'underline',
    textUnderlineOffset: '1px',
    color: '$accentText',
  },
}
