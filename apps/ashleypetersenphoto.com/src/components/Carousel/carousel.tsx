import * as React from 'react'
import { JSXElementConstructor, ReactElement } from 'react'
import { CarouselTypes } from './carousel.types'
import { _Carousel, _CarouselItem } from './carousel.styles'

const Carousel: CarouselTypes = ({ children }): ReactElement => {
  return (
    <_Carousel>
      {React.Children.map(
        children,
        (child: ReactElement<JSXElementConstructor<any>>) => {
          return React.cloneElement(<_CarouselItem>{child}</_CarouselItem>)
        },
      )}
    </_Carousel>
  )
}

export default Carousel
