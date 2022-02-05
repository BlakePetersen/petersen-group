import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Carousel, { CarouselItem } from '@/components/Carousel'
import Page from '@/components/Page'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Conceptual Portraiture, Underwater Photography - Ashley Petersen
          Photography
        </title>
      </Head>
      <Page>
        <Carousel>
          <CarouselItem>
            <Image src={`/images/_DSC0958.jpg`} layout={'fill'} />
          </CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
          <CarouselItem></CarouselItem>
        </Carousel>
      </Page>
    </>
  )
}

export default Index
