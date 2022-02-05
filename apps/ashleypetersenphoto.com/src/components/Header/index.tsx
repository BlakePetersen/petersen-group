import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import { _Header } from './styles'

const Header = () => {
  return (
    <_Header>
      <Menu />
      <Logo />
    </_Header>
  )
}

export default Header
