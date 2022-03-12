import type { AppProps } from 'next/app'

import { providers } from 'ethers'
import { Provider } from 'wagmi'
import { ThemeProvider } from 'next-themes'

import Frame from '@/components/Frame'
import { Connectors } from 'artax-ui'
import '@/styles/global-styles.scss'

const provider = ({ chainId }) => {
  return new providers.AlchemyProvider(
    chainId,
    process.env.NEXT_PUBLIC_ALCHEMY_ID,
  )
}

const App = ({ Component, pageProps }: AppProps) => {
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

export default App
