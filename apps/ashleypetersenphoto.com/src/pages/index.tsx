import React from 'react'
import useSWR from '@zeit/swr'
import groq from 'groq'
import { SanityClient } from 'artax-ui'

import type { NextPage } from 'next'
import Image from 'next/image'

import { Page } from 'artax-ui'
import Frame from '@/components/Frame'
import Gallery from '@/components/Gallery'

const Index: NextPage = () => {
  const { data: featuredImages } = useSWR(
    groq`*[_type=="photo" && count((facets[]->slug.current)[@ in ["featured"]]) == 1]{"featuredImageUrl": image.asset->url}`,
    query => SanityClient.fetch(query),
  )

  return (
    <Page
      title={`Conceptual Portraiture, Underwater Photography`}
      description={`Ashley Petersen Photography`}
    >
      <Frame>
        <Gallery>
          {featuredImages &&
            featuredImages.map((image, i) => {
              return (
                <Image src={image.featuredImageUrl} layout={'fill'} key={i} />
              )
            })}
        </Gallery>
      </Frame>
    </Page>
  )
}

export default Index
