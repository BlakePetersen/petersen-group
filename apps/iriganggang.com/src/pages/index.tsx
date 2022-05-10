import type { NextPage } from 'next'
import { Hero, Page } from 'artax-ui'
import Wordmark from '@/components/Wordmark'
import Iggbg from '../../public/igg-bg.jpg'
import Footer from '@/components/Footer'

const Home: NextPage = () => {
  return (
    <Page
      title={Constants.APP_TITLE}
      description={`wikka-wikka ruuurrrurriirrriiirrrriiiirrrrriiiiganggang`}
    >
      <Hero
        h1={<Wordmark />}
        background={Iggbg}
        css={{
          height: `100vh`,
          maxHeight: `100%`,
        }}
      />
      <Footer />
    </Page>
  )
}

export default Home
