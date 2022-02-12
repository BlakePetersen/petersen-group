import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Carousel from '@/components/Carousel'
import Page from '@/components/Page'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>- Ashley Petersen Photography</title>
      </Head>
      <Page title={`Conceptual Portraiture, Underwater Photography`}>
        <Carousel>
          <Image
            src={`/images/homepage/_DSC0958.jpg`}
            layout={'fill'}
            objectFit={`cover`}
          />

          <Image
            src={`/images/homepage/_DSC8983.jpg`}
            layout={'fill'}
            objectFit={`cover`}
          />

          <Image
            src={`/images/homepage/DSC_1264.jpg`}
            layout={'fill'}
            objectFit={`cover`}
          />
        </Carousel>
      </Page>
    </>
  )
}

export default Index
