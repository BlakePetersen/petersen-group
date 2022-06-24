import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import { _Header } from './header.styles'

export const Header = ({ menuData }) => {
  return (
    <_Header>
      <Menu data={menuData} />
      <Logo />
    </_Header>
  )
}
