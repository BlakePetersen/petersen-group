import { styled } from '@stitches/react'

export const _CardImage = styled('picture', {
  width: '100%',
  position: 'absolute',
  height: `100%`,
  display: 'block',
  img: {
    objectFit: `cover`,
  },
})
