import '@/styles/_global-styles.scss'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {AnimatePresence} from 'framer-motion'

import Layout from '@/components/layout'
import {darkTheme, theme} from '../../stitches.config'

export {reportWebVitals} from 'next-axiom'

const MyApp = ({Component, pageProps, router}: AppProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme={theme.className}
            value={{
                light: theme.className,
                dark: darkTheme.className,
            }}
        >
            <Layout>
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
