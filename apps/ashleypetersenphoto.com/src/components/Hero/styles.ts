import { styled } from '@/config/stitches.config'
import { _H1 } from '@/components/Typography/styles'
import { _Container } from '@/components/Container'

export const _Hero = styled(_Container, {
  justifyContent: `center`,
  alignItems: `center`,
  position: `relative`,
  overflow: `hidden`,
  borderRadius: `.5rem`,
  boxShadow: '0 3px 6px 0 $grayA6',
  aspectRatio: 2.5
})

export const _HeroBackground = styled('div', {
  position: 'absolute',
  width: `100%`,
  height: `auto`,
  aspectRatio: 3 / 2,

  img: {
    width: `100%`,
    height: `auto`,
    minHeight: `66.6vh`,
    objectFit: `cover`
  }
})

export const _HeroContainer = styled(_Container, {
  flexDirection: `column`,
  justifyContent: `flex-end`,
  textAlign: `center`,
  position: `relative`,
  height: `100%`,
  zIndex: 1,
  padding: `2rem`
})

export const _HeroCtas = styled('div', {
  display: `flex`,
  flexDirection: `row`,
  gap: `1rem`
})

export const _HeroH1 = styled(_H1, {
  lineHeight: 1,
  fontSize: 'clamp(2rem, 5vw, 4rem)',
  background: `-webkit-linear-gradient(-45deg, $accentBorderHoverA, $accentTextContrastA)`,
  '-webkit-background-clip': `text`,
  '-webkit-text-fill-color': `transparent`,
  textShadow: `.25rem .25rem .25rem $grayA5`,
  '-webkit-text-stroke-width': `1px`,
  '-webkit-text-stroke-color': `white`
})
