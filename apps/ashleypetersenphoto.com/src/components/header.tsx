import { styled } from '@stitches/react'

import Logo from '@/components/logo'
import WalletConnector from '@/components/connect-wallet'

const _Header = styled('header', {
  display: 'flex',
  gap: '2rem',
})

const Header = () => {
  return (
    <_Header>
      <Logo />
      <WalletConnector />
    </_Header>
  )
}

export default Header
