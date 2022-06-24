import { _Carousel, _CarouselItem } from './carousel.styles'
import * as React from 'react'
import { JSXElementConstructor, ReactElement } from 'react'

const Carousel: React.FC = ({ children }): ReactElement => {
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
