'use client'

import { _CardImage } from './card-image.styles'
import { CardImageTypes } from './card-image.types'

import React, { ReactElement } from 'react'

const CardImage: CardImageTypes = ({ src }): ReactElement => {
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

export default CardImage
