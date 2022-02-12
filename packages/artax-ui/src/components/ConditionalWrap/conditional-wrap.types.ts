import React, { FC } from 'react'

export type WrapProps = FC<{
  if: boolean
  with: (
    children:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | string
      | number
      | Record<string, unknown>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | boolean,
  ) => React.ReactElement
}>
