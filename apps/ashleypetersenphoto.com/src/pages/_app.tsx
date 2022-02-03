import { Provider } from 'wagmi'
import { ThemeProvider } from 'next-themes'

import Frame from '@/components/Frame'
import { connectors } from '@/lib/wallet'

import '@/styles/global-styles.scss'

function App({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <ThemeProvider>
        <Frame>
          <Component {...pageProps} />
        </Frame>
      </ThemeProvider>
    </Provider>
  )
}

export default App
