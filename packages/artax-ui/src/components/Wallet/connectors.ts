import { chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { ConnectorsType, ConnectorType } from './connectors.types'

const chains = defaultChains

export const Connectors = ({
  chainId,
  appName,
  infuraId,
}: ConnectorsType): ConnectorType[] => {
  const rpcUrl =
    chains.find(x => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName,
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}
