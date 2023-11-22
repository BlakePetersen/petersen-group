import { styled } from '@/config/stitches.config'

export const _Footer = styled('footer', {
  width: '100%',
  textAlign: 'center',
  fontSize: '0.8rem',
  backdropFilter: 'blur(.5rem)',
  display: `flex`,
  flexDirection: `column`,
  gap: `2rem`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `1.5rem`,
  // borderTop: `1px solid $accentBorder`,
  a: {
    color: '$accentTextContrast',
    textDecoration: 'none'
  }
})

export const _Copyright = styled('div', {
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  gap: `0.5rem`
})
