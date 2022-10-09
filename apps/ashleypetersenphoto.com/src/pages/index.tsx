import React from 'react'
import useSWR from 'swr'
import groq from 'groq'
import { SanityClient, Page } from 'artax-ui'

import type { NextPage } from 'next'

import Card from '@/components/Card'
import CardImage from '@/components/CardImage'
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
                <Card key={i}>
                  <CardImage src={image.featuredImageUrl} />
                </Card>
              )
            })}
        </Gallery>
      </Frame>
    </Page>
  )
}

export default Index
