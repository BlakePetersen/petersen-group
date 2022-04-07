import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import { _Header } from './header.styles'

export const Header = () => {
  return (
    <_Header>
      <Menu />
      <Logo />
    </_Header>
  )
}
