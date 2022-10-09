import type { NextPage } from 'next'
import { Hero, Page } from 'artax-ui'
import Iggbg from '@/assets/igg-bg.jpg'
import Constants from '@/config/constants'
import { useAccount } from 'wagmi'
import { request } from 'graphql-request'
import useSWR from 'swr'
import React, { useState, useEffect, useContext } from 'react'

import { UserContext } from '@/contexts/User'

const fetcher = query => request(Constants.SUBGRAPH_URI, query)

const Home: NextPage = () => {
  const { address } = useAccount()
  const [userState, userDispatch] = React.useContext(UserContext)

  useEffect(() => {
    address
      ? userDispatch({ type: 'login', data: address })
      : userDispatch({ type: 'logout' })
  }, [address])

  const { data: userData } = useSWR(
    address
      ? `{
      user(id: "${address}") {
          tokens {
            id
            base
          }
      }
    }`
      : null,
    fetcher,
  )

  useEffect(() => {
    userData?.user?.tokens?.map(token => {
      return token.base === 'Iridescent'
        ? userDispatch({
            type: 'setIriGangGang',
          })
        : userDispatch({
            type: 'unsetIriGangGang',
          })
    })
  }, [userData])

  return (
    <Page
      title={Constants.APP_TITLE}
      description={`wikka-wikka ruuurrrurriirrriiirrrriiiirrrrriiiiganggang`}
    >
      <Hero
        h1={!userState.loggedIn ? 'Please Sign In' : null}
        background={userState.isIriGangGang ? Iggbg : null}
        css={{
          height: `100vh`,
          maxHeight: `100%`,
        }}
      />
    </Page>
  )
}

export default Home
