import '../styles/global-styles.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Frame from '@/components/Frame'

const DaleBridgesApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Frame>
        <Component {...pageProps} />
      </Frame>
    </ThemeProvider>
  )
}

export default DaleBridgesApp
