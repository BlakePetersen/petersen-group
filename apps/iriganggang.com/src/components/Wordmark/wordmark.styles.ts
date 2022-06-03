import { styled } from '@stitches/react'
import { _H1 as H1 } from 'artax-ui'

export const _H1 = styled(H1, {
  lineHeight: `1`,
  textShadow: `0 .5rem .1rem rgba(0,0,0,.45)`,
})

export const _Wordmark = styled('a', {
  overflow: `visible`,
  textDecoration: `none`,
  textShadow: `0 8px 0 rgba(255,255,255,1), 
  -1px -1px 0 rgba(255,255,255,1),
  1px -1px 0 rgba(255,255,255,1),
  -1px 1px 0 rgba(255,255,255,1),
  1px 1px 0 rgba(255,255,255,1)`,
})
