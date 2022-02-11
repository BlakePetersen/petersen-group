import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <div>
      {/* Head */}
      <Head>
        <title>Wallet Visualizer</title>
        <meta name="description" content="Wallet Visualizer -- 0xbp.io" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}

      {/* Footer */}
    </div>
  )
}

export default Home
