import '@/styles/_global-styles.scss'

import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Theme, ThemePanel } from '@radix-ui/themes'

import Layout from '@/components/layout'
import { WebVitals } from 'artax-ui/src/components/WebVitals'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
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
  )
}

export default MyApp
