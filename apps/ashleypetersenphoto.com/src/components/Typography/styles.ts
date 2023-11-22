import type * as Stitches from '@stitches/react'
import { styled } from '@/config/stitches.config'

const _H: Stitches.CSS = {
  margin: '0',
  padding: '.5rem'
}

export const _H1 = styled('h1', {
  ..._H,
  fontSize: 'clamp(2rem, 5vw, 4rem)'
})

export const _H2 = styled('h2', {
  ..._H,
  fontSize: 'clamp(1.5rem, 5vw, 3rem)'
})

export const _H3 = styled('h3', {
  ..._H,
  fontSize: 'clamp(1.25rem, 5vw, 2.5rem)'
})

export const _H4 = styled('h4', {
  ..._H,
  fontSize: 'clamp(1rem, 5vw, 2rem)'
})

export const _H5 = styled('h5', {
  ..._H,
  fontSize: 'clamp(.75rem, 5vw, 1.5rem)'
})

export const _H6 = styled('h6', {
  ..._H,
  fontSize: 'clamp(.5rem, 5vw, 1rem)'
})

export const _P = styled('p', {
  fontSize: 'clamp(.75rem, 5vw, 1.5rem)'
})

export const _A = styled(_P, {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
})
