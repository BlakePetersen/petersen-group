import groq from 'groq'
import { SanityClient, Section } from 'artax-ui'
import { Frame } from '@/components/Frame'
import Gallery from '@/components/Gallery'

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
        <Gallery images={images} />
      </Section>
    </Frame>
  )
}

export default PortfolioIndexPage
