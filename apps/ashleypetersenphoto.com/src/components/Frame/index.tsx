import Header from '@/components/header'
import Footer from '@/components/footer'

import { _Body } from './styles'

const Index = ({ children }) => {
  return (
    <_Body>
      <Header />

      {children}

      <Footer />
    </_Body>
  )
}

export default Index
