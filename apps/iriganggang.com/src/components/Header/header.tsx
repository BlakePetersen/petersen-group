import { _Header, _Nav } from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Menu } from 'artax-ui'
import Wordmark from '@/components/Wordmark'

export const Header = () => (
  <_Header>
    <_Nav>
      <Menu>
        <ul>
          <li>Iri</li>
          <li>Gang</li>
          <li>Gang</li>
        </ul>
      </Menu>

      <Wordmark />
    </_Nav>

    <ConnectButton label={'Sign In'} showBalance={false} chainStatus="none" />
  </_Header>
)
