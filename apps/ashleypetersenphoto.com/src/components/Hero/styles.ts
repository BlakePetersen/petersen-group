import { styled } from '@/config/stitches.config'
import { _Section } from '@/components/Section'
import { _H1 } from '@/components/Typography/styles'
import { _Container } from '@/components/Container'

export const _Hero = styled(_Section, {
  minHeight: `50vw`,
  justifyContent: `center`,
  position: `relative`,
  overflow: `hidden`,
  borderRadius: `1rem`,
  '&:after': {
    content: `''`,
    position: `absolute`,
    bottom: `-50%`,
    left: `-25%`,
    width: `200%`,
    height: `66.6%`,
    background: `-webkit-linear-gradient($accentBaseA, $accentBorderA), -webkit-linear-gradient($accentBaseA, $accentBorderHoverA)`,
    backgroundBlendMode: `luminosity`,
    transform: `rotate(15deg)`
  }
})

export const _HeroBackground = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: `100%`,
  height: `auto`,
  aspectRatio: 3 / 2,

  img: {
    width: `100%`,
    height: `auto`,
    minHeight: `66.6vh`,
    maxHeight: `1200px`,
    objectFit: `cover`
  }
})

export const _HeroContainer = styled(_Container, {
  flexDirection: `column`,
  justifyContent: `flex-end`,
  textAlign: `left`,
  position: `relative`,
  zIndex: 1
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
