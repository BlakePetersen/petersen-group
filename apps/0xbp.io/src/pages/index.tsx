import type { NextPage } from 'next'
import { ArtaxImage, Card, Grid, Page } from 'artax-ui'
import useSWR from 'swr'
import { useAccount } from 'wagmi'

const fetcher = url => fetch(url).then(res => res.json())

const Home: NextPage = () => {
  const { data: accountData } = useAccount()

  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}/getNFTs/`
  const fetchURL = `${baseURL}?owner=${accountData?.address}&filters[]=SPAM`
  const { data } = useSWR(fetchURL, fetcher)

  return (
    <Page
      title={`Ethereum Wallet Visualizer`}
      description={`Ethereum Wallet Visualizer`}
    >
      <Grid>
        {data?.ownedNfts?.map(ownedNft => {
          return (
            ownedNft.media &&
            ownedNft.media.map((image, i) => {
              return (
                image.gateway && (
                  <Card>
                    <ArtaxImage src={image.gateway} layout="fill" key={i} />
                  </Card>
                )
              )
            })
          )
        })}
      </Grid>
    </Page>
  )
}

export default Home
