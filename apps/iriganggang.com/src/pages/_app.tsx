import '../styles/global-styles.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'

import Frame from '@/components/Frame'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Constants from '@/config/constants'

import { UserProvider } from '@/contexts/User'
// import { darkTheme } from 'stitches.config'

// Wallet SSO Dependencies
import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURA_ID }),
    publicProvider(),
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
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        appInfo={{
          appName: Constants.APP_TITLE,
        }}
      >
        <ThemeProvider>
          <UserProvider>
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
          </UserProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
