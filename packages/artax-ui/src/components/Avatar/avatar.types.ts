import React, { FC } from 'react'

export type AvatarTypes = FC<{
  children:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | Record<string, unknown>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | boolean
}>
