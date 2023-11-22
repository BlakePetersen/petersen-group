import { styled } from '@stitches/react'

export const _Header = styled('header', {
  display: 'flex',
  position: `absolute`,
  alignItems: 'center',
  justifyContent: `space-between`,
  gap: '1rem',
  borderBottom: '1px solid rgba(255,255,255,.1)',
  width: '100%',
  padding: '1rem',
  zIndex: 2,
  top: '0',
  left: '0',
  backdropFilter: 'blur(.5rem)',

  '&::before': {
    content: `''`,
    display: 'block',
    backgroundImage: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    boxShadow:
      '0px 10px 50px -10px rgba(0, 0, 0, 1), ' +
      '0px 7px 30px -15px rgba(0, 0, 0, 0.5), ' +
      '0px 4px 10px -20px rgba(0, 0, 0, 1)',
    left: 0,
    opacity: 0.25,
  },
})
