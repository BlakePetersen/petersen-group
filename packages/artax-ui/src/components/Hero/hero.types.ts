import React, { FC } from 'react'
import type * as Stitches from '@stitches/react'
import { StaticImageData } from 'next/image'

type KitchenSinkType =
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | string
  | number
  | Record<string, unknown>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | boolean

export type HeroTypes = FC<{
  css?: Stitches.CSS
  h1: KitchenSinkType
  h2?: KitchenSinkType
  background?: HTMLImageElement | StaticImageData
  children?: KitchenSinkType
}>
