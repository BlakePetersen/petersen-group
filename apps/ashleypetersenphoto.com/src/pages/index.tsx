import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import Carousel from '@/components/Carousel'
import { Page } from 'artax-ui'

const Index: NextPage = () => {
  return (
    <Page
      title={`Conceptual Portraiture, Underwater Photography`}
      description={`Ashley Petersen Photography`}
    >
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
  )
}

export default Index
