import { useAccount, useConnect, useEnsAvatar } from 'wagmi'
import * as Avatar from '@radix-ui/react-avatar'
import Image from 'next/image'

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
    <div>
      <Avatar.Root asChild>
        {!!avatarData ? (
          <Avatar.Image>
            <Image src={avatarData} crossOrigin={'anonymous'} />
          </Avatar.Image>
        ) : (
          <Avatar.Fallback>{accountData?.ens?.name}</Avatar.Fallback>
        )}
      </Avatar.Root>
    </div>
  ) : (
    <>
      {dedupeConnectorsByName.map((connector, i) => (
        <div key={i} onClick={() => connect(connector)}>
          <Image
            src={`/assets/${connector.name.replace(' ', '-')}.svg`}
            height={20}
            width={20}
          />

          {connector.name}
        </div>
      ))}
    </>
  )
}

export default WalletConnector
