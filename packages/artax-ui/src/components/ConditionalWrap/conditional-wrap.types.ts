import React, { FC } from 'react'

export type WrapProps = FC<{
  if: boolean
  with: (children: React.ReactNode) => React.ReactElement
  children: React.ReactNode
}>
