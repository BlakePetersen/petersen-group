import { styled } from '@stitches/react'
import { Section } from 'artax-ui'

export const _Hero = styled(Section, {
  display: 'flex',
  flexDirection: `column`,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  width: `100vw`,
  padding: `2rem`,
})

export const _Lead = styled('div', {
  display: 'flex',
  flexDirection: `column`,
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '1rem',
  textAlign: `center`,
})

export const _Copy = styled('div', {
  fontSize: '.8rem',
  margin: `0`,
})

export const _H1 = styled('h1', {
  fontSize: '1.5rem',
  margin: `0`,
})

export const _H2 = styled('h2', {
  fontSize: '1rem',
  margin: `0`,
})
