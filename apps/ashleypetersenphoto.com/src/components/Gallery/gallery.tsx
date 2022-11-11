'use client'

import { _Gallery } from './gallery.styles'
import { GalleryTypes } from './gallery.types'

import {
  Children,
  cloneElement,
  JSXElementConstructor,
  ReactElement,
} from 'react'

const Gallery: GalleryTypes = ({ children }): ReactElement => {
  return (
    <_Gallery>
      {Children.map(
        children,
        (child: ReactElement<JSXElementConstructor<any>>) => {
          return cloneElement(child)
        },
      )}
    </_Gallery>
  )
}

export default Gallery
