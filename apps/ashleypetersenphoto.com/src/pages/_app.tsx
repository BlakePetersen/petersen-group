import Frame from '@/components/layout/frame'

function App({ Component, pageProps }) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  )
}

export default App
