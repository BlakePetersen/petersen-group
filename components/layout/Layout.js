import Head from '../Head'
import Header from '../StickyHeader'
import Content from './Content'
import Footer from '../Footer'

const Layout = ({ children, title }) => (
  <div>
    <Head title={ title } />
    <Header />
    <Content children={ children } />
    <Footer />
  </div>
);

export default Layout
