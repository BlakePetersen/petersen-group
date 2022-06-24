import { _CardImage } from './card-image.styles'
import { CardImageTypes } from './card-image.types'
import Image from 'next/image'

import React, { ReactElement } from 'react'

const CardImage: CardImageTypes = ({ src }): ReactElement => {
  return (
    <_CardImage>
      <Image src={src} layout={'fill'} />
    </_CardImage>
  )
}

export default CardImage
