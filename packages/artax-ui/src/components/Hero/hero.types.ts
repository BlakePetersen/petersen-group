import { FC } from 'react'
import type * as Stitches from '@stitches/react'
import { StaticImageData } from 'next/image'
import { KitchenSinkType } from '../../utilities/Types'

export type HeroTypes = FC<{
  css?: Stitches.CSS
  h1: KitchenSinkType
  h2?: KitchenSinkType
  background?: HTMLImageElement | StaticImageData
  children?: KitchenSinkType
}>
