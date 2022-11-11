import React, { FC } from 'react'
import type * as Stitches from '@stitches/react'

export type SectionTypes = FC<{
  css?: Stitches.CSS
  children: React.ReactNode
}>
