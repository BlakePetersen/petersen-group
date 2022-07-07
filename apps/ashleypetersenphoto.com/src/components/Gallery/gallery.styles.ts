import { styled } from '@stitches/react'

export const _Gallery = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(420px, .5fr))',
  gap: `1rem`,
  gridAutoFlow: `dense`,
  width: `100%`,
  padding: `0 1rem`,
})
