import { styled } from '@stitches/react'

import Logo from '@/components/logo'

const _Header = styled('header', {
  display: 'flex',
  gap: '2rem',
})

function Header() {
  return (
    <_Header>
      <Logo />
      <a>Connect Wallet</a>
    </_Header>
  )
}

export default Header
