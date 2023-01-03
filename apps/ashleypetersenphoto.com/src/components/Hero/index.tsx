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
import Section from '@/components/Section'
import { CallToAction } from '@/components/CallToAction'

const Hero: HeroTypes = ({ image, css, h1, h2, ctas }): ReactElement => (
  <Section>
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
        {h1 ? <_HeroH1>{h1}</_HeroH1> : null}
        <_HeroCtas>
          {ctas
            ? ctas.map((cta, i) => (
                <CallToAction href={cta.url}>{cta.text}</CallToAction>
              ))
            : null}
        </_HeroCtas>
      </_HeroContainer>
    </_Hero>
  </Section>
)

export { Hero as default, _Hero }
