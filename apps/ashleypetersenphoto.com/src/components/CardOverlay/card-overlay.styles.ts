import { styled } from '@stitches/react'

export const _CardOverlay = styled('div', {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
  display: 'grid',
  backgroundColor: `$indigoA8`,
  gridTemplateColumns: 'repeat(2, auto)',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: `$indigo1`,
  fontWeight: 'normal',
  fontSize: '.75rem',
  padding: '.5rem 1rem',
  p: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    margin: '0.25rem 0',
    textAlign: `center`,
  },
})
