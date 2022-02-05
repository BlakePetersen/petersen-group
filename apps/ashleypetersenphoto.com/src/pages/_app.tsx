import { providers } from 'ethers'
import { Provider } from 'wagmi'
import { ThemeProvider } from 'next-themes'

import Frame from '@/components/Frame'
import connectors from '@/components/ConnectWallet/wallet'
import '@/styles/global-styles.scss'

const provider = ({ chainId }) => {
  new providers.AlchemyProvider(chainId, 'k_Si9c0kXGTWh-ko8ZNlpiX829Qu8rqq')
}

function App({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors} provider={provider}>
      <ThemeProvider>
        <Frame>
          <Component {...pageProps} />
        </Frame>
      </ThemeProvider>
    </Provider>
  )
}

export default App
