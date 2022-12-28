'use client'

import { Copyright } from 'artax-ui'
import { _Copyright, _Footer } from './styles'
import C from '@/config/constants'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <_Footer>
      <_Copyright>
        <Logo css={{ scale: `.8` }} />
        <Copyright statement={C.COPYRIGHT_STATEMENT} />
      </_Copyright>
    </_Footer>
  )
}

export default Footer
