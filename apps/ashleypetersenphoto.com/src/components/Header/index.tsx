'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Logo from '@/components/Logo'
import { _Header, _LogoContainer } from './styles'

const DynamicMenu = dynamic(() => import('@/components/Menu'), {
  suspense: true
})

const Header = () => {
  return (
    <_Header>
      <Suspense fallback={null}>
        <DynamicMenu />
      </Suspense>

      <_LogoContainer>
        <Logo />
      </_LogoContainer>
    </_Header>
  )
}

export default Header
