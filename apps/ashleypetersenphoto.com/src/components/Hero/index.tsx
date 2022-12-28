'use client'

import React, { ReactElement } from 'react'

import {
  _Hero,
  _HeroBackground,
  _HeroContainer,
  _HeroCtas,
  _HeroH1
} from './styles'
import { HeroTypes } from './types'
import Image from 'next/image'
import { CallToAction } from '@/components/CallToAction'
import { Pencil2Icon } from '@radix-ui/react-icons'

const Hero: HeroTypes = ({ image, css, h1, h2 }): ReactElement => (
  <_Hero css={{ ...css }}>
    <_HeroBackground>
      <Image
        src={image.imageSrc}
        alt={image.imageName}
        width={4800}
        height={3200}
        sizes="100vw"
        priority
      />
    </_HeroBackground>
    <_HeroContainer>
      <_HeroH1>
        Book your <br /> session today
      </_HeroH1>
      <_HeroCtas>
        <CallToAction href="/book">
          <Pencil2Icon />
          Book Now
        </CallToAction>
      </_HeroCtas>
    </_HeroContainer>
  </_Hero>
)

export { Hero as default, _Hero }
