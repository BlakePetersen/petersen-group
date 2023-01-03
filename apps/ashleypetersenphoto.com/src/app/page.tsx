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
  const heroImage = images.splice(Math.random() * images.length, 1)[0]
  const heroCtas = [
    {
      url: `/book`,
      text: 'Book Now'
    }
  ]

  return (
    <Frame>
      <Hero
        image={heroImage}
        h1={`Ashley Petersen Photography`}
        h2={`Portrait / Boudior / Underwater`}
        ctas={heroCtas}
      />

      <Gallery images={images} />
    </Frame>
  )
}

export default RootPage
