import { _Header } from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu } from 'artax-ui'

export const Header = () => (
  <_Header>
    <Menu>Bing Bong</Menu>
    <ConnectButton />
  </_Header>
)
