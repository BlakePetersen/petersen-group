import { _Header } from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu } from 'artax-ui'
import Wordmark from '@/components/Wordmark'

export const Header = () => (
  <_Header>
    <div>
      <Menu>Bing Bong</Menu>
      <Wordmark />
    </div>
    <ConnectButton label={'Sign In'} showBalance={false} />
  </_Header>
)
