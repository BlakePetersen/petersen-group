import React, { FC } from 'react'

export type ConditionalWrapTypes = FC<{
  if: boolean
  with: (children: React.ReactNode) => React.ReactElement
  children: React.ReactNode
}>
