import { styled } from '@stitches/react'
import Image from 'next/image'

export const _CardImage = styled(Image, {
  width: '100%',
  height: `auto`,
  display: 'block',
  objectFit: `cover`,
  borderRadius: '.5rem',
})
