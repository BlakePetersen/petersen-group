import React from 'react'
import ReactGlTransitionImage from 'react-gl-transition-image'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer'
import { Spring } from 'react-spring'

const Carousel = ({ src }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <Spring
      config={{
        tension: 180,
        friction: 45,
        clamp: true
      }}
      to={{ progress: inView ? 1 : 0 }}
    >
      {animProps => (
        <ReactGlTransitionImage
          ref={ref}
          src={<Image src={src} alt={``} />}
          progress={animProps.progress}
        />
      )}
    </Spring>
  )
}

export default Carousel
