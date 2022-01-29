import { useAccount, useConnect } from 'wagmi'
import { Content, Item, Root, Trigger } from '@radix-ui/react-dropdown-menu'

const WalletConnector = () => {
  const [{ data: connectData, loading: connectDataLoading, error }, connect] =
    useConnect()
  const [{ data: accountData }] = useAccount()

  console.log(connectData)

  return (
    <Root>
      <Trigger>Connect Wallet</Trigger>

      <Content>
        {connectData.connectors.map((connector, i) => (
          <Item key={i} onClick={() => connect(connector)}>
            {connector.name}
          </Item>
        ))}
      </Content>
    </Root>
  )
}

export default WalletConnector
