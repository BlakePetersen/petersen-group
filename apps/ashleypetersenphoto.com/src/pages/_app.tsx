import { Provider } from 'wagmi'

import Frame from '@/components/Frame'
import { connectors } from '@/lib/wallet'

import '@/styles/global-styles.scss'

function App({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <Frame>
        <Component {...pageProps} />
      </Frame>
    </Provider>
  )
}

export default App
