import { styled } from '@stitches/react'
import { blackA, violet } from '@radix-ui/colors'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const _Footer = styled('footer', {
  position: 'absolute',
  display: 'flex',
  alignItems: `center`,
  justifyContent: `center`,
  gap: `.25rem`,
  lineHeight: `1`,
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  padding: '2rem',
  fontSize: '0.8rem',
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
  backgroundColor: blackA.blackA3,
  border: `2px solid white`,
  boxShadow: `0 3px 1px rgba(0, 0, 0, .1), 0 6px 2px rgba(0, 0, 0, .1)`,
  transition: 'box-shadow 200ms ease, transform 200ms ease',
  '&:hover': {
    boxShadow: `0 6px 2px rgba(0, 0, 0, .075), 0 12px 4px rgba(0, 0, 0, .075)`,
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
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

export const _Attribution = styled('div', {
  textShadow: `0 3px 1px rgba(0, 0, 0, .1), 0 6px 2px rgba(0, 0, 0, .1)`,
})

export const _AttributionLink = styled('a', {
  display: `inline-block`,
  textShadow: `0 3px 1px rgba(0, 0, 0, .1), 0 6px 2px rgba(0, 0, 0, .1)`,
  transition: 'text-shadow 200ms ease, transform 200ms ease',
  '&:hover': {
    textShadow: `0 6px 2px rgba(0, 0, 0, .075), 0 12px 4px rgba(0, 0, 0, .075)`,
    transform: `translateY(-3px)`,
  },
  '&:focus, &:active': {
    textShadow: `0 2px 1px rgba(0, 0, 0, .125), 0 4px 2px rgba(0, 0, 0, .125)`,
    transform: `translateY(1px)`,
  },
})
