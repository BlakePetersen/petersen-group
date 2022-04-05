import { _H1, _H2, _Header, _Logo } from './nft-card.styles'
import WalletConnector from '@/components/WalletConnector'

const NftCard = () => {
  return (
    <_Header>
      <div>MENU</div>

      <_Logo>
        <_H1>0xBP</_H1>
        <_H2>Ethereum Wallet Visualizer</_H2>
      </_Logo>

      <WalletConnector />
    </_Header>
  )
}

export default NftCard
