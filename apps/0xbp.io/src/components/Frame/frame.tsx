import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { _Frame } from './frame.styles'

export const Frame = ({ children }) => {
  return (
    <_Frame>
      <Header />
      {children}
      <Footer />
    </_Frame>
  )
}
