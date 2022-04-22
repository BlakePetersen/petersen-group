import type { NextPage } from 'next'
import { Hero, Page } from 'artax-ui'
import Wordmark from '@/components/Wordmark'
import Iggbg from '../../public/igg-bg.jpg'

const Home: NextPage = () => {
  return (
    <Page title={`HASHTAG IRIGANGGANG 💎🌈`}>
      <Hero
        h1={<Wordmark />}
        background={Iggbg}
        css={{
          height: `100vh`,
        }}
      />
    </Page>
  )
}

export default Home
