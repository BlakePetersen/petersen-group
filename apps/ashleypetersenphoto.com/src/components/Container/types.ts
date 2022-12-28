import { FC } from 'react'
import type * as Stitches from '@stitches/react'

export type ContainerTypes = FC<{
  css?: Stitches.CSS
  children: React.ReactNode
}>
