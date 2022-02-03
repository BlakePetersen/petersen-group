import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { _Frame } from './styles'

const Index = ({ children }) => {
  return (
    <_Frame>
      <Header />

      {children}

      <Footer />
    </_Frame>
  )
}

export default Index
