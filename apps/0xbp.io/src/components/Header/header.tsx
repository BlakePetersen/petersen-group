import {
  _H1,
  _H2,
  _Header,
  _Logo,
  _ConnectButtonWrapper,
} from './header.styles'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export const Header = () => {
  return (
    <_Header>
      <div>&nbsp;</div>

      <_Logo>
        <_H1>0xBP</_H1>
        <_H2>Ethereum Wallet Visualizer</_H2>
      </_Logo>

      <_ConnectButtonWrapper>
        <ConnectButton
          label={'Sign In'}
          showBalance={false}
          accountStatus={'avatar'}
          chainStatus={'icon'}
        />
      </_ConnectButtonWrapper>
    </_Header>
  )
}
