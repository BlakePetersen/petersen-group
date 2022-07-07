import { _CardOverlay } from './card-overlay.styles'
import { CardOverlayTypes } from './card-overlay.types'
import Image from 'next/image'

import React, { ReactElement } from 'react'
import { CameraIcon, GlobeIcon } from '@radix-ui/react-icons'

const CardOverlay: CardOverlayTypes = ({ name, location }): ReactElement => {
  return (
    <_CardOverlay>
      <p>
        <CameraIcon /> <strong>{name}</strong>
      </p>
      <p>
        <GlobeIcon /> <strong>{location || `Parts Unknown`}</strong>
      </p>
    </_CardOverlay>
  )
}

export default CardOverlay
