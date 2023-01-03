import { styled } from '@stitches/react'
import Image from 'next/image'

export const _CardImage: any = styled(Image, {
  width: '100%',
  height: `auto`,
  display: 'block',
  objectFit: `cover`,
  aspectRatio: `3/2`
})
