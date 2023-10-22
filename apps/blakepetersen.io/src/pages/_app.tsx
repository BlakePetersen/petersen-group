import '@/styles/_global-styles.scss'

import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/layout'
import { WebVitals } from 'artax-ui/src/components/WebVitals'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Theme grayColor={'slate'} accentColor={'cyan'}>
        <WebVitals />
        <Layout>
          <AnimatePresence
            mode={`wait`}
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  )
}

export default MyApp
