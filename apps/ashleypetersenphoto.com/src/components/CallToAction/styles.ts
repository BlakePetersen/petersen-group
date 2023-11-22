import { styled } from '@/config/stitches.config'
import { keyframes } from '@stitches/react'
import Link from 'next/link'

const _AnimRotate = keyframes({
  to: {
    '--angle': '360deg'
  }
})

export const _CallToAction = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: `none`,
  gap: `.5rem`,
  background: '$accentBase',
  '--angle': '0deg',
  borderRadius: 9999,
  border: 'double 4px transparent',
  padding: `.5rem 1rem`,
  backgroundImage:
    'linear-gradient($gray1, $gray1), linear-gradient(var(--angle), $indigo7, $indigo10)',
  animation: `6s ${_AnimRotate} linear infinite`,
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  transition:
    'scale 0.15s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out',
  boxShadow: '0 2px 6px 2px $blackA6',
  '&:focus, &:hover': {
    outline: 'none',
    backgroundImage:
      'linear-gradient($gray1, $gray1), linear-gradient(var(--angle), $indigo8, $indigo11)',
    scale: 1.2,
    transform: `translateY(-3px)`,
    boxShadow: '0 4px 8px 2px $blackA5'
  }
})
