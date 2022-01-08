import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'
import { PageTransition } from 'next-page-transitions'

import Head from '../Head'
import Header from '../header/Header'
import Content from './Content'
import Footer from '../footer/Footer'

import C from '../../config/constants'

const Layout = ({ children, title, pathname }) => {
    const gtmParams = { id: C.GTM_ID }

  return (
    <>
      <Head title={title} />
      <Header />
      <PageTransition
        timeout={250}
        classNames="page-transition"
        monkeyPatchScrolling={true}
      >
        <GTMProvider state={ gtmParams }>
          <Content key={pathname}>{children}</Content>
        </GTMProvider>
      </PageTransition>
      <Footer />
    </>
  )
}

export default Layout
