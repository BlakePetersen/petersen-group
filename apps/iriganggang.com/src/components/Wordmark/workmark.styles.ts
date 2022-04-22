import { styled } from '@stitches/react'

export const _Wordmark = styled('a', {
  color: `white`,
  fontSize: `6rem`,
  textShadow: `0 .5rem .5rem rgba(0,0,0,.3)`,
  mixBlendMode: `soft-light`,

  '&:hover': {
    textShadow: `0 1.5rem 1.5rem rgba(0,0,0,.15)`,
  },
})
