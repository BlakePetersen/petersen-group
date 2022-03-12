import '../styles/global-styles.scss'
import { Provider } from 'wagmi'
import { providers } from 'ethers'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { Connectors } from 'artax-ui'
import Frame from '@/components/Frame'

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
          <Component {...pageProps} />
        </Frame>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
