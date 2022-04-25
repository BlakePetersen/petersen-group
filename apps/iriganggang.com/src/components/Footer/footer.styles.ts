import { styled } from '@stitches/react'
import { blackA, violet } from '@radix-ui/colors'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const _Footer = styled('footer', {
  position: 'absolute',
  display: 'flex',
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `.25rem`,
  lineHeight: `1`,
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  padding: '2rem',
  fontSize: '0.8rem',
  opacity: `.85`,
  textShadow: `0 4px 1px rgba(0, 0, 0, .1)`,
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
  boxShadow: `0 4px 1px rgba(0, 0, 0, .1)`,
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
