import { _Carousel, _CarouselItem, _Track } from './styles'
import * as React from 'react'
import { JSXElementConstructor, ReactElement } from 'react'

export const CarouselItem: React.FC = ({ children }) => {
  return <_CarouselItem>{children}</_CarouselItem>
}

const Carousel: React.FC = ({ children }) => {
  return (
    <_Carousel>
      <_Track>
        {React.Children.map(
          children,
          (child: ReactElement<JSXElementConstructor<any>>) => {
            return React.cloneElement(child)
          },
        )}
      </_Track>
    </_Carousel>
  )
}

export default Carousel
