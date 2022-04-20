import { useAccount, useConnect, useEnsAvatar } from 'wagmi'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { ArtaxImage } from 'artax-ui'

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
    <Avatar>
      {avatarData ? (
        <ArtaxImage src={avatarData} width={48} height={48} />
      ) : (
        <AvatarFallback delayMs={500}>{accountData?.ens?.name}</AvatarFallback>
      )}
    </Avatar>
  ) : (
    <>
      {dedupeConnectorsByName.map((connector, i) => (
        <div key={i} onClick={() => connect(connector)}>
          <ArtaxImage
            src={`/assets/${connector.name.replace(' ', '-')}.svg`}
            height={20}
            width={20}
          />
          Sign In
        </div>
      ))}
    </>
  )
}

export default WalletConnector
