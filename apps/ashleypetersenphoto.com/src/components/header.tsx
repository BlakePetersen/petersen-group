import { styled } from '@stitches/react'

import Logo from '@/components/logo'
import Menu from '@/components/Menu'

const _Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  background: 'rgba(255,255,255,.25)',
  borderBottom: '1px solid #ccc',
  width: '100%',
  padding: '1rem',
})

const Header = () => {
  return (
    <_Header>
      <Menu />
      <Logo />
    </_Header>
  )
}

export default Header
