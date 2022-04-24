import { styled } from '@stitches/react'
import { _H1 as H1 } from 'artax-ui'

export const _H1 = styled(H1, {
  fontSize: '5rem',
  lineHeight: `1`,
  transition: `transform 300ms ease-in-out, text-shadow 300ms ease-in-out`,
  textShadow: `0 .5rem .5rem rgba(0,0,0,.1)`,

  '&:hover': {
    transform: 'translateY(-.75rem) scale(1.25)',
    textShadow: `0 3rem 1rem rgba(0,0,0,.05)`,
  },
})

export const _Wordmark = styled('a', {
  color: `white`,
})
