import { styled } from '@stitches/react'

import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

const _Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  background: 'rgba(255,255,255,.25)',
  borderBottom: '2px solid #ccc',
  width: '100%',
  padding: '1rem',
})

const Index = () => {
  return (
    <_Header>
      <Menu />
      <Logo />
    </_Header>
  )
}

export default Index
