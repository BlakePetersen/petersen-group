import { styled } from '@stitches/react'
import { _H1 as H1 } from 'artax-ui'

export const _H1 = styled(H1, {
  fontSize: '8rem',
  lineHeight: `1`,
  transition: `transform 300ms ease-in-out, text-shadow 300ms ease-in-out`,
  textShadow: `0 .5rem .5rem rgba(0,0,0,.45)`,
  mixBlendMode: `overlay`,

  '&:hover': {
    transform: 'translateY(-.75rem) scale(1.25)',
    textShadow: `0 3rem 1rem rgba(0,0,0,.15)`,
  },
})

export const _Wordmark = styled('a', {
  color: `black`,
  transition: `text-shadow 300ms ease-in-out`,
  textShadow: `0 8px 0 rgba(255,255,255,1), 
  -1px -1px 0 rgba(255,255,255,1),
  1px -1px 0 rgba(255,255,255,1),
  -1px 1px 0 rgba(255,255,255,1),
  1px 1px 0 rgba(255,255,255,1)`,
  '&:hover': {
    textShadow: `0 8rem 0 rgba(255,255,255,.1), 
    0 6rem 0 rgba(255,255,255,.2),
    0 4rem 0 rgba(255,255,255,.3),
    0 2rem 0 rgba(255,255,255,.4),
  -1px -1px 0 rgba(255,255,255,1),
  1px -1px 0 rgba(255,255,255,1),
  -1px 1px 0 rgba(255,255,255,1),
  1px 1px 0 rgba(255,255,255,1)`,
  },
})
