import { _Header } from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Wordmark from '@/components/Wordmark'
import { HeaderTypes } from './header.types'

export const Header: HeaderTypes = () => (
  <_Header>
    <ConnectButton label={'Sign In'} showBalance={false} chainStatus="none" />

    <Wordmark />
  </_Header>
)
