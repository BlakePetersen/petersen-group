import { styled } from '@stitches/react'

export const _CardImage = styled('picture', {
  width: '100%',
  position: 'relative',
  display: 'block',
  aspectRatio: `3/2`,
  img: {
    objectFit: `cover`,
  },
})
