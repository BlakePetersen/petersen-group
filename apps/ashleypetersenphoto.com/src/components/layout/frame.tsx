import styled from 'styled-components'

import Head from '@/components/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

const _Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Frame = ({ children }) => {
  return (
    <_Body>
      <Head />
      <Header />

      {children}

      <Footer />
    </_Body>
  )
}

export default Frame
