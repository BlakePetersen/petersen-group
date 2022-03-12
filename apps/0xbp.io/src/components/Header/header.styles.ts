import { styled } from '@stitches/react'

export const _Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid rgba(255,255,255,.01)',
  color: 'rgba(0,0,0,.35)',
  textShadow: '0 1px 0 #fff',
  backgroundColor: 'rgba(0,0,0,.05)',
  boxShadow:
    '0px 10px 50px -10px rgba(0, 0, 0, 0.15), 0px 10px 30px -15px rgba(0, 0, 0, 0.05)',
  width: '100%',
  padding: '1rem',
  zIndex: 2,
  top: '0',
  backdropFilter: 'blur(.5rem)',
})

export const _Logo = styled('div', {
  display: 'flex',
  flexDirection: `column`,
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const _H1 = styled('h1', {
  fontSize: '2rem',
  margin: `0`,
})

export const _H2 = styled('h2', {
  fontSize: '1rem',
  margin: `0`,
})
