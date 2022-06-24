import { Copyright } from 'artax-ui'
import { _Footer } from './footer.styles'
import C from '@/config/constants'

export const Footer = () => {
  return (
    <_Footer>
      <Copyright siteName={C.SITE_TITLE} statement={C.COPYRIGHT_STATEMENT} />
    </_Footer>
  )
}
