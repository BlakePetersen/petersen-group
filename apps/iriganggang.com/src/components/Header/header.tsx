import { _Header } from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu } from 'artax-ui'
import Wordmark from '@/components/Wordmark'
import { HeaderTypes } from './header.types'

export const Header: HeaderTypes = () => (
  <_Header>
    {/*<Menu>*/}
    <ConnectButton label={'Sign In'} showBalance={false} chainStatus="none" />
    {/*</Menu>*/}
    <Wordmark />
  </_Header>
)
