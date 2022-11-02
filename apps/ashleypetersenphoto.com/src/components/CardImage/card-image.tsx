import { _CardImage } from './card-image.styles'
import { CardImageTypes } from './card-image.types'
import Image from 'next/image'

import React, { ReactElement } from 'react'

const CardImage: CardImageTypes = ({ src }): ReactElement => {
  return (
    <_CardImage>
      <Image
        src={src}
        fill
        alt={``}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </_CardImage>
  )
}

export default CardImage
