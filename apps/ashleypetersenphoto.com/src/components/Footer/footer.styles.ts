import { styled } from '@stitches/react'

export const _Footer = styled('footer', {
  width: '100%',
  textAlign: 'center',
  fontSize: '0.8rem',
  backdropFilter: 'blur(.5rem)',
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  a: {
    color: '$accentTextContrast',
  },
})
