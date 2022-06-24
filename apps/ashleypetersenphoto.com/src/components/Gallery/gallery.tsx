import { _Gallery, _GalleryItem } from './gallery.styles'
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
          return cloneElement(<_GalleryItem>{child}</_GalleryItem>)
        },
      )}
    </_Gallery>
  )
}

export default Gallery
