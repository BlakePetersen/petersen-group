import { styled } from '@stitches/react'
import { blackA, violet, whiteA } from '@radix-ui/colors'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const _Footer = styled('footer', {
  position: 'absolute',
  display: 'flex',
  alignItems: `center`,
  justifyContent: `center`,
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
  backgroundColor: whiteA.whiteA12,
  border: `3px solid ${whiteA.whiteA12}`,
  // boxShadow: `0 3px 1px rgba(0, 0, 0, .1), 0 6px 2px rgba(0, 0, 0, .1)`,
  transition: 'box-shadow 200ms ease, transform 200ms ease',
  '&:hover': {
    // boxShadow: `0 6px 2px rgba(0, 0, 0, .075), 0 12px 4px rgba(0, 0, 0, .075)`,
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

export const _Attribution = styled('div', {})

export const _Handle = styled('div', {
  transform: `translateY(-.75rem)`,
  color: blackA.blackA12,
  backgroundColor: whiteA.whiteA12,
  borderRadius: `999999px`,
})

export const _Copyright = styled('div', {})
