import React from 'react'
import groq from 'groq'
import { SanityClient, Section } from 'artax-ui'
import { Frame } from '@/components/Frame'
import Gallery from '@/components/Gallery'
import Card from '@/components/Card'
import CardOverlay from '@/components/CardOverlay'
import CardImage from '@/components/CardImage'

async function getPortfolioImages(slug: string) {
  const pathQuery = slug?.length
    ? `&& count((facets[]->slug.current)[@ in ["${slug.toString()}"]]) == 1`
    : ``
  const portfolioQuery = `*[_type=="photo" ${pathQuery}]`

  return await SanityClient.fetch(groq`${portfolioQuery}{
      "imageSrc": image.asset->url,
      "imageName": name
    }`)
}

const PortfolioIndexPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const images = await getPortfolioImages(slug)

  return (
    <Frame>
      <Section>
        <h1>Portfolio {slug && ` - ${slug.toString()}`}</h1>
        {images && <h3>Displaying {images.length} images</h3>}
      </Section>

      <Section>
        <Gallery>
          {images ? (
            images.map((image, i) => (
              <Card key={i}>
                <CardImage src={image.imageSrc} />
                <CardOverlay name={image.imageName} />
              </Card>
            ))
          ) : (
            <p>No images found.</p>
          )}
        </Gallery>
      </Section>
    </Frame>
  )
}

export default PortfolioIndexPage
