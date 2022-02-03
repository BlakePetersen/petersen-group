import { styled } from '@stitches/react'
import Copyright from '@/components/Copyright'

const _Footer = styled('footer', {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  padding: '2rem',
  fontSize: '0.8rem',
})

function Index() {
  return (
    <_Footer>
      <Copyright />
      {/*<Navigation />*/}
      {/*<SocialLinks />*/}
    </_Footer>
  )
}

export default Index
