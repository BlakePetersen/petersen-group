import { useAccount, useConnect, useEnsAvatar } from 'wagmi'
import * as Avatar from '@radix-ui/react-avatar'
import Image from 'next/image'

import { _Item } from '@/components/Menu/menu.styles'

const WalletConnector = () => {
  const [{ data: connectData, loading: connectDataLoading, error }, connect] =
    useConnect()
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  })

  const dedupeConnectorsByName = Array.from(
    new Set(connectData.connectors.map(connector => connector.name)),
  ).map(name => {
    return connectData.connectors.find(connector => connector.name === name)
  })

  const [{ data: avatarData }] = useEnsAvatar({
    addressOrName: accountData?.ens?.name,
  })

  return connectData.connected ? (
    <_Item>
      <Avatar.Root asChild>
        {!!avatarData ? (
          <Avatar.Image>
            <Image src={avatarData} crossOrigin={'anonymous'} />
          </Avatar.Image>
        ) : (
          <Avatar.Fallback>{accountData?.ens?.name}</Avatar.Fallback>
        )}
      </Avatar.Root>
    </_Item>
  ) : (
    <>
      {dedupeConnectorsByName.map((connector, i) => (
        <_Item key={i} onClick={() => connect(connector)}>
          <Image
            src={`/assets/${connector.name.replace(' ', '-')}.svg`}
            height={20}
            width={20}
          />

          {connector.name}
        </_Item>
      ))}
    </>
  )
}

export default WalletConnector
