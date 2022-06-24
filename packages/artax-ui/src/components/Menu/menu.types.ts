import React, { FC } from 'react'
import type * as Stitches from '@stitches/react'

export type MenuTypes = FC<{
  css?: Stitches.CSS
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | Record<string, unknown>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
}>
