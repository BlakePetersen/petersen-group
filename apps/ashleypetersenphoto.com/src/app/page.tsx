import { Frame } from '@/components/Frame'
import { Section } from '@/components/Section'

const RootPage = () => {
  return (
    <Frame>
      <Section css={{ backgroundColor: '$accentBg' }}>Bing Bong</Section>
      <Section>Bing Bong</Section>
      <Section>Bing Bong</Section>
      <Section>Bing Bong</Section>
    </Frame>
  )
}

export default RootPage
