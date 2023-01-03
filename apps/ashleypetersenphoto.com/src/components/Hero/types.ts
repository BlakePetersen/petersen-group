import { FC } from 'react'
import type * as Stitches from '@stitches/react'

export type HeroTypes = FC<{
  image: {
    imageSrc: string
    imageName: string
  }
  css?: Stitches.CSS
  h1: string
  h2: string
  ctas: {
    url: string
    text: string
  }[]
}>
