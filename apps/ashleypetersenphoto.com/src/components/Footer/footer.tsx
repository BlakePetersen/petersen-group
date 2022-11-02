import { Copyright } from 'artax-ui'
import { _Copyright, _Footer } from './footer.styles'
import C from '@/config/constants'
import Logo from '@/components/Logo'

export const Footer = () => {
  return (
    <_Footer>
      <_Copyright>
        <Logo css={{ scale: `.8` }} />
        <Copyright statement={C.COPYRIGHT_STATEMENT} />
      </_Copyright>
    </_Footer>
  )
}
