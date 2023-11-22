'use client'

import { _CardImage } from './styles'
import { Types } from './types'

import React, { ReactElement } from 'react'

const Index: Types = ({ src }): ReactElement => {
  return (
    <_CardImage
      src={src}
      alt={``}
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      height={1600}
      width={2400}
    />
  )
}

export default Index
