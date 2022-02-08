import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

export type ConnectorType =
  | InjectedConnector
  | WalletConnectConnector
  | WalletLinkConnector

export type ConnectorsType = {
  chainId?: number
  appName: string
  infuraId: string
}
