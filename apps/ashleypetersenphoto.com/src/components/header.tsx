import styled from 'styled-components'
import Logo from '@/components/logo'
import Navigation from '@/components/navigation'

const _Header = styled.header`
  position: fixed;
  text-align: center;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);

  > * + * {
    margin-top: 1rem;
  }
`

function Header() {
  return (
    <_Header>
      <Logo />
      <Navigation />
    </_Header>
  )
}

export default Header
