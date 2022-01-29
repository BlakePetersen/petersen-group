import { useAccount, useConnect } from 'wagmi'
import { Content, Item, Root, Trigger } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'

const WalletConnector = () => {
  const [{ data: connectData, loading: connectDataLoading, error }, connect] =
    useConnect()
  const [{ data: accountData }] = useAccount()

  const dedupeConnectorsByName = Array.from(
    new Set(connectData.connectors.map(connector => connector.name)),
  ).map(name => {
    return connectData.connectors.find(connector => connector.name === name)
  })

  return (
    <Root>
      <Trigger>Connect Wallet</Trigger>

      <Content>
        {dedupeConnectorsByName.map((connector, i) => (
          <Item key={i} onClick={() => connect(connector)}>
            <Image
              src={`/assets/${connector.name.replace(' ', '-')}.svg`}
              height={20}
              width={20}
            />

            {connector.name}
          </Item>
        ))}
      </Content>
    </Root>
  )
}

export default WalletConnector
