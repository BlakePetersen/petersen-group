import { styled } from '@stitches/react'

export const _Gallery = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
  gap: `1rem`,
  gridAutoFlow: `dense`,
  width: `100%`,
  padding: `0 1rem`,
})

export const _GalleryItem = styled('picture', {
  width: '100%',
  position: 'relative',
  display: 'block',
  aspectRatio: `3/2`,
  img: {
    objectFit: `cover`,
  },
})
