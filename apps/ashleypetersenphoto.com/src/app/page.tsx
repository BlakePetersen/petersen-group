import { Frame } from '@/components/Frame'
import { Section } from '@/components/Section'
import { SanityClient } from 'artax-ui'
import Gallery from '@/components/Gallery'
import Card from '@/components/Card'
import CardImage from '@/components/CardImage'
import CardOverlay from '@/components/CardOverlay'
import React from 'react'
import groq from 'groq'

async function getFeaturedImages() {
  const featuredQuery = `*[_type=="photo" && count((facets[]->slug.current)[@ in ["featured"]]) == 1]`

  return await SanityClient.fetch(groq`${featuredQuery}{
      "imageSrc": image.asset->url,
      "imageName": name
    }`)
}

const RootPage = async () => {
  const images = await getFeaturedImages()

  return (
    <Frame>
      <Section>
        <Gallery>
          {images ? (
            images.map((image, i) => (
              <Card key={i}>
                <CardImage src={`${image.imageSrc}?crop=entropy&h=1600`} />
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

export default RootPage
