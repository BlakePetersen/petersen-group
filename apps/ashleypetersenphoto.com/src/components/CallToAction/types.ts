import { FC } from 'react'
import type * as Stitches from '@stitches/react'

export type CallToActionTypes = FC<{
  css?: Stitches.CSS
  href: string
  children: React.ReactNode
}>
