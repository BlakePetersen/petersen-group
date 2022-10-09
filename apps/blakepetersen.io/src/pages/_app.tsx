import '@/styles/_global-styles.scss'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Layout from '@/components/layout'

export { reportWebVitals } from 'next-axiom'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
