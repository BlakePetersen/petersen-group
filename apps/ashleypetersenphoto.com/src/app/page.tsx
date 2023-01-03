import React from 'react'
import groq from 'groq'
import { Frame } from '@/components/Frame'
import { SanityClient } from 'artax-ui'
import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'

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
      <Gallery images={images} />

      <Hero
        image={images[0]}
        h1={`Ashley Petersen Photography`}
        h2={`Portrait / Boudior / Underwater`}
      />
    </Frame>
  )
}

export default RootPage
