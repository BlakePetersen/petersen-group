import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import useSWR from '@zeit/swr'
import groq from 'groq'
import { Page, SanityClient } from 'artax-ui'
import Frame from '@/components/Frame'
import Gallery from '@/components/Gallery'
import Card from '@/components/Card'
import CardOverlay from '@/components/CardOverlay'
import CardImage from '@/components/CardImage'
import { useRouter } from 'next/router'

const PortfolioIndexPage: NextPage = () => {
  const router = useRouter()
  const { path } = router.query
  const pathQuery = path?.length
    ? `&& count((facets[]->slug.current)[@ in ["${path.toString()}"]]) == 1`
    : ``
  const portfolioQuery = `*[_type=="photo" ${pathQuery}]`

  const { data: featuredImages } = useSWR(
    groq`${portfolioQuery}{
      "imageSrc": image.asset->url,
      "imageName": name
    }`,
    query => SanityClient.fetch(query),
  )

  return (
    <Page
      title={`Portfolio`}
      description={`Ashley Petersen Photography Portfolio`}
    >
      <Frame>
        <h1>Portfolio {path && ` - ${path.toString()}`}</h1>
        {featuredImages && <h3>Displaying {featuredImages.length} images</h3>}

        <Gallery>
          {featuredImages ? (
            featuredImages.map((image, i) => (
              <Card key={i}>
                <CardImage src={image.imageSrc} />
                <CardOverlay name={image.imageName} />
              </Card>
            ))
          ) : (
            <p>No images found.</p>
          )}
        </Gallery>
      </Frame>
    </Page>
  )
}

export default PortfolioIndexPage
