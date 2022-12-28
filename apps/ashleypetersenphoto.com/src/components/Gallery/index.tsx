'use client'

import { _Gallery } from './styles'
import { Types } from './types'

import React, { ReactElement } from 'react'
import Card from '@/components/Card'
import CardImage from '@/components/CardImage'
import { Section } from '@/components/Section'

const Gallery: Types = ({ images }): ReactElement => {
  return (
    <Section>
      <_Gallery>
        {images ? (
          images.map((image, i) => (
            <Card key={i}>
              <CardImage src={`${image.imageSrc}?crop=entropy&h=1600`} />
            </Card>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </_Gallery>
    </Section>
  )
}

export { Gallery as default, _Gallery }
