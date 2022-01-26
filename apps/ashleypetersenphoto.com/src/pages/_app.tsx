import Frame from '@/components/layout/frame'

import '@/styles/global-styles.scss'

function App({ Component, pageProps }) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}

export default App
