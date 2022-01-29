import Head from '@/components/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

import { _Body } from './styles'

const Index = ({ children }) => {
  return (
    <_Body>
      <Head />
      <Header />
      {children}
      <Footer />
    </_Body>
  )
}

export default Index
