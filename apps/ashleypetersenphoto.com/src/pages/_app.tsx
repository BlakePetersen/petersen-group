import { chain, defaultChains, Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

import Frame from '@/components/layout/frame'
import '@/styles/global-styles.scss'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

const chains = defaultChains

type Connector =
  | InjectedConnector
  | WalletConnectConnector
  | WalletLinkConnector

const connectors = ({ chainId }: { chainId?: number }): Connector[] => {
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
        appName: 'NextJS-wagmi',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}

function App({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <Frame>
        <Component {...pageProps} />
      </Frame>
    </Provider>
  )
}

export default App
