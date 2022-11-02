import { FC, ReactNode } from 'react'
import type * as Stitches from '@stitches/react'
import { StaticImageData } from 'next/image'

export type HeroTypes = FC<{
  css?: Stitches.CSS
  h1: ReactNode
  h2?: ReactNode
  background?: HTMLImageElement | StaticImageData
  children?: ReactNode
}>
