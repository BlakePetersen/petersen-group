import '../styles/global-styles.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

import Frame from '@/components/Frame'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Constants from '@/config/constants'

// Wallet SSO Dependencies
import '@rainbow-me/rainbowkit/styles.css'
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { chain, createClient, WagmiProvider } from 'wagmi'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.alchemy(process.env.NEXT_PUBLIC_ALCHEMY_ID),
    apiProvider.fallback(),
  ],
)
const { connectors } = getDefaultWallets({
  appName: Constants.APP_TITLE,
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider>
          <Frame>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, maximum-scale=1.0, width=device-width"
              />
              <title>{Constants.APP_TITLE}</title>
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
          </Frame>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  )
}

export default MyApp
