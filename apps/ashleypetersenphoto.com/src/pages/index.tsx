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
            <Image
              src={`/images/homepage/_DSC0958.jpg`}
              layout={'fill'}
              objectFit={`cover`}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={`/images/homepage/_DSC8983.jpg`}
              layout={'fill'}
              objectFit={`cover`}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={`/images/homepage/DSC_1264.jpg`}
              layout={'fill'}
              objectFit={`cover`}
            />
          </CarouselItem>
        </Carousel>
      </Page>
    </>
  )
}

export default Index
