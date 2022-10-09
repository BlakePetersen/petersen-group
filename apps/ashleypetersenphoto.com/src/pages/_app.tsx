import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '@/styles/global-styles.scss'
import '@rainbow-me/rainbowkit/styles.css'
import { darkTheme } from '../../stitches.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

export { reportWebVitals } from 'next-axiom'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Ashley Petersen Photography NFT Mint',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          value={{
            light: 'light',
            dark: darkTheme.className,
          }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
