import type { NextPage } from 'next'
import { Hero, Page } from 'artax-ui'
import Wordmark from '@/components/Wordmark'
import Iggbg from '@/assets/igg-bg.jpg'
import Constants from '@/config/constants'
import { useAccount } from 'wagmi'

const Home: NextPage = () => {
  const { data } = useAccount()

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
      {data && data.address}
    </Page>
  )
}

export default Home
