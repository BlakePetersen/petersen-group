import { PageTransition } from 'next-page-transitions'

import Head from '../Head'
import Header from '../header/Header'
import Content from './Content'
import Footer from '../footer/Footer'
import Loader from '../layout/Loader'

const Layout = ({ children, title }) => (
  <>
    <Head title={ title } />
    <Header />
    <PageTransition
      timeout={250}
      classNames='page-transition'
      loadingComponent={<Loader />}
      loadingDelay={500}
      loadingTimeout={{
        enter: 250,
        exit: 0
      }}
      loadingClassNames='loading-indicator'
    >
        <Content children={ children } />
    </PageTransition>
    <Footer />
  </>
);

export default Layout
