import type {AppProps} from 'next/app'
import {AnimatePresence} from 'framer-motion'

export {reportWebVitals} from 'next-axiom';

import Layout from '@/components/layout'

import '@/styles/_global-styles.scss'

const MyApp = ({Component, pageProps, router}: AppProps) => {
    return (
        <Layout>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp
