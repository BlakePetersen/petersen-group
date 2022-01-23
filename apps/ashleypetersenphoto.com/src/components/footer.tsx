import styled from 'styled-components'
import Copyright from '@/components/copyright'
import Navigation from '@/components/navigation'
import SocialLinks from '@/components/social-links'

const _Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 2rem;
  font-size: 0.8rem;
  background: rgba(255, 255, 255, 0.8);

  > * + * {
    margin-top: 1rem;
  }
`

function Footer() {
  return (
    <_Footer>
      <Copyright />
      <Navigation />
      <SocialLinks />
    </_Footer>
  )
}

export default Footer
