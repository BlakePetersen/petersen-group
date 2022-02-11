import { styled } from '@stitches/react'

export const _Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  borderBottom: '1px solid rgba(255,255,255,.1)',
  backgroundColor: 'rgba(0,0,0,.25)',
  boxShadow:
    '0px 10px 50px -10px rgba(0, 0, 0, 0.5), 0px 10px 30px -15px rgba(0, 0, 0, 0.25)',
  width: '100%',
  padding: '1rem',
  zIndex: 2,
  top: '0',
  backdropFilter: 'blur(.5rem)',
})
