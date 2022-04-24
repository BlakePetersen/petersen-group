import '../styles/global-styles.scss'
import { Provider } from 'wagmi'
import { providers } from 'ethers'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Connectors } from 'artax-ui'
import Frame from '@/components/Frame'
import React from 'react'
import Head from 'next/head'

const provider = ({ chainId }) => {
  return new providers.AlchemyProvider(
    chainId,
    process.env.NEXT_PUBLIC_ALCHEMY_ID,
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect connectors={Connectors} provider={provider}>
      <ThemeProvider>
        <Frame>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, maximum-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Frame>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
