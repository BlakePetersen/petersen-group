import path from 'path'
import HoverCard from '@radix-ui/react-hover-card'
import twitter from 'twitter-text'
import ReactHtmlParser from 'react-html-parser'

import {
  _Arrow,
  _Attribution,
  _Avatar,
  _AvatarFallback,
  _AvatarImage,
  _Content,
  _Handle,
  _TweetContainer,
  _TweetFollowerContainer,
  _TweetLabel,
  _TweetLead,
  _TweetTimestamp
} from './styles'
import Link from 'next/link'

const screenName = 'blake_petersen'

async function getTwitterData() {
  const baseUrl = 'https://blakepetersen.io'
  const apiPath = 'api/twitter/profile'
  const profileApiUrl = new URL(
    path.join(apiPath, screenName),
    baseUrl
  ).toString()
  const res = await fetch(profileApiUrl)
  return res?.json()
}

export const Attribution = async () => {
  const profile = await getTwitterData()
  const tweetDate = profile && new Date(profile.tweet.time)

  return (
    <>
      {profile ? (
        <_Attribution>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <_Avatar>
                <_AvatarImage src={profile.pfp} alt={profile.handle} />
                <_AvatarFallback delayMs={600}>
                  {profile.handle}
                </_AvatarFallback>
              </_Avatar>

              <_Handle>by {profile.handle}</_Handle>
            </HoverCard.Trigger>

            <HoverCard.Portal>
              <_Content side={'top'}>
                <_TweetLead>
                  <_TweetLabel>Latest Tweet</_TweetLabel>
                  <_TweetTimestamp>
                    {tweetDate.toLocaleString()}
                  </_TweetTimestamp>
                </_TweetLead>

                <_TweetContainer>
                  {ReactHtmlParser(
                    twitter.autoLink(twitter.htmlEscape(profile.tweet.text))
                  )}
                </_TweetContainer>

                <_TweetFollowerContainer>
                  <Link href={`https://www.twitter.com/${screenName}`}>
                    Follow {profile.handle} on Twitter
                  </Link>
                </_TweetFollowerContainer>

                <_Arrow />
              </_Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </_Attribution>
      ) : (
        <div />
      )}
    </>
  )
}
