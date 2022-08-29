import path from 'path'
import useSWR from 'swr'
import { fetcher, toOrdinalSuffix } from 'artax-ui'
import * as HoverCard from '@radix-ui/react-hover-card'
import twitter from 'twitter-text'
import ReactHtmlParser from 'react-html-parser'

import {
  _Arrow,
  _Attribution,
  _Content,
  _Avatar,
  _AvatarFallback,
  _AvatarImage,
  _Handle,
  _TweetContainer,
  _TweetFollowerContainer,
  _TweetLabel,
  _TweetLead,
  _TweetTimestamp,
} from './attribution.styles'
import { AttributionTypes } from './attribution.types'
import Link from 'next/link'

export const Attribution: AttributionTypes = () => {
  const baseUrl = 'https://blakepetersen.io'
  const apiPath = 'api/twitter/profile'
  const screenName = 'blake_petersen'
  const profileApiUrl = new URL(
    path.join(apiPath, screenName),
    baseUrl,
  ).toString()

  const { data: profile } = useSWR(profileApiUrl, fetcher)

  const tweetDate = profile && new Date(profile.tweet.time)

  return (
    profile && (
      <_Attribution>
        {/* _TwitterAttribution */}
        <HoverCard.Root>
          <HoverCard.Trigger>
            <>
              <_Avatar>
                <_AvatarImage src={profile.pfp} alt={profile.handle} />
                <_AvatarFallback delayMs={600}>
                  {profile.handle}
                </_AvatarFallback>
              </_Avatar>

              <_Handle>by {profile.handle}</_Handle>
            </>
          </HoverCard.Trigger>

          <HoverCard.Portal>
            <_Content side={'top'}>
              {/* _Tweet */}
              <_TweetLead>
                <_TweetLabel>Latest Tweet</_TweetLabel>
                <_TweetTimestamp>{tweetDate.toLocaleString()}</_TweetTimestamp>
              </_TweetLead>

              <_TweetContainer>
                {ReactHtmlParser(
                  twitter.autoLink(twitter.htmlEscape(profile.tweet.text)),
                )}
              </_TweetContainer>

              {/* _Followers */}
              <_TweetFollowerContainer>
                <Link href={`https://www.twitter.com/${screenName}`}>
                  <a>
                    Be {profile.handle}'s{' '}
                    {toOrdinalSuffix(profile.followers + 1, true)} follower!
                  </a>
                </Link>
              </_TweetFollowerContainer>

              <_Arrow />
            </_Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </_Attribution>
    )
  )
}
