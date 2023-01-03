'use client'

import { _CardOverlay } from './styles'
import { Types } from './types'

import React, { ReactElement } from 'react'
import { CameraIcon, GlobeIcon } from '@radix-ui/react-icons'

const Index: Types = ({ name, location }): ReactElement => {
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

export default Index
