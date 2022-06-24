import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import { _Header, _LogoContainer } from './header.styles'

export const Header = ({ menuData }) => {
  return (
    <_Header>
      <Menu data={menuData} />
      <_LogoContainer>
        <Logo />
      </_LogoContainer>
    </_Header>
  )
}
