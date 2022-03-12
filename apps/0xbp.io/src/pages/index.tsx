import type { NextPage } from 'next'
import Image from 'next/image'
import { Page } from 'artax-ui'
import useSWR from 'swr'
import { useAccount } from 'wagmi'

const fetcher = url => fetch(url).then(res => res.json())

const Home: NextPage = () => {
  const [{ data: accountData }] = useAccount()

  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs/`
  const fetchURL = `${baseURL}?owner=${accountData?.address}`
  const { data } = useSWR(fetchURL, fetcher)

  return (
    <Page
      title={`Ethereum Wallet Visualizer`}
      description={`Ethereum Wallet Visualizer`}
    >
      {data?.ownedNfts?.map(ownedNft => {
        return (
          !!ownedNft.media &&
          ownedNft.media.map((image, i) => {
            return (
              <>
                {!!image.gateway && (
                  <Image src={image.gateway} width={200} height={200} key={i} />
                )}
              </>
            )
          })
        )
      })}
    </Page>
  )
}

export default Home
