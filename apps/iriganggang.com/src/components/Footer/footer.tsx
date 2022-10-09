import useSWR from 'swr'
import path from 'path'

import { keyframes, styled } from '@stitches/react'
import { blackA, whiteA } from '@radix-ui/colors'
import * as HoverCard from '@radix-ui/react-hover-card'
import { fetcher } from 'artax-ui'

import {
  _Attribution,
  _Avatar,
  _AvatarFallback,
  _AvatarImage,
  _Footer,
  _Handle,
} from './footer.styles'

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-6px)' },
  '100%': { opacity: 1, transform: 'translateY(-3px)' },
})

const _Content = styled(HoverCard.Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: blackA.blackA12,
  backgroundColor: whiteA.whiteA12,
  maxWidth: 300,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
    },
  },
})

const _Arrow = styled(HoverCard.Arrow, {
  fill: whiteA.whiteA12,
})

const baseUrl = 'https://blakepetersen.io'
const apiPath = 'api/twitter/profile'
const screenName = 'blake_petersen'

export const Footer = () => {
  const profileApiUrl = new URL(
    path.join(apiPath, screenName),
    baseUrl,
  ).toString()

  const { data: profile } = useSWR(profileApiUrl, fetcher)

  return (
    <_Footer style={{ color: `white`, lineHeight: `1.5` }}>
      {profile && (
        <_Attribution>
          {/* _TwitterAttribution */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div>
                <_Avatar>
                  <_AvatarImage src={profile.pfp} alt={profile.handle} />
                  <_AvatarFallback delayMs={600}>
                    {profile.handle}
                  </_AvatarFallback>
                </_Avatar>

                <_Handle>
                  &copy; {new Date().getFullYear()} ~ {profile.handle}
                </_Handle>
              </div>
            </HoverCard.Trigger>

            <_Content side="top">
              {/* _Tweet */}
              <div>
                {profile.tweet.text}
                {profile.tweet.time}
              </div>

              {/* _Followers */}
              <div>
                {profile.followers}
                {profile.followings}
              </div>

              <_Arrow />
            </_Content>
          </HoverCard.Root>
        </_Attribution>
      )}
    </_Footer>
  )
}
