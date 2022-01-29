import { chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

const chains = defaultChains

type Connector =
  | InjectedConnector
  | WalletConnectConnector
  | WalletLinkConnector

export const connectors = ({ chainId }: { chainId?: number }): Connector[] => {
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
    new WalletLinkConnector({
      options: {
        appName: 'ashleypetersenphoto.com',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}
