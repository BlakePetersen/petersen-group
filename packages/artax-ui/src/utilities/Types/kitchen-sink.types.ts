import React from 'react'

export type KitchenSinkType =
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | string
  | number
  | Record<string, unknown>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | boolean
