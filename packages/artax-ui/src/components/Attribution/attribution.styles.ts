import { styled } from '@stitches/react'
import { blackA, gray, grayDarkA, violet, whiteA } from '@radix-ui/colors'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as HoverCard from '@radix-ui/react-hover-card'
import { slideDownAndFade } from 'artax-ui'

export const _Arrow = styled(HoverCard.Arrow, {
  fill: whiteA.whiteA12,
})

export const _Avatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: `3rem`,
  height: `3rem`,
  borderRadius: '100%',
  backgroundColor: whiteA.whiteA12,
  border: `3px solid ${whiteA.whiteA12}`,
  transition: 'box-shadow 200ms ease, transform 200ms ease',
  '&:hover': {
    transform: `translateY(-3px)`,
  },
})

export const _AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const _AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: whiteA.whiteA12,
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

export const _Attribution = styled('div', {
  fontFamily: '"Public Sans", sans-serif;',
})

export const _Handle = styled('div', {
  transform: `translateY(-.75rem)`,
  color: blackA.blackA12,
  backgroundColor: whiteA.whiteA12,
  borderRadius: `999999px`,
  padding: `.25rem .5rem`,
  position: `relative`,
})

export const _Copyright = styled('div', {})

export const _Content = styled(HoverCard.Content, {
  bottom: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: `.5rem`,
  borderRadius: 6,
  padding: `.5rem`,
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

export const _TweetContainer = styled('div', {
  background: gray.gray3,
  borderRadius: 4,
  padding: `.75rem`,
})

export const _TweetFollowerContainer = styled('div', {
  fontSize: `.75rem`,
})

export const _TweetLabel = styled('div', {
  fontSize: `.75rem`,
  textAlign: `left`,
})

export const _TweetLead = styled('div', {
  display: `flex`,
  justifyContent: `space-between`,
})

export const _TweetTimestamp = styled('div', {
  fontSize: `.75rem`,
  textAlign: 'right',
})
