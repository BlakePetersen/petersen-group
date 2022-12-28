import { styled } from '@/config/stitches.config'
import { _Container } from '@/components/Container'

export const _Gallery = styled(_Container, {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(420px, .5fr))',
  gap: `1rem`,
  width: `100%`,
  padding: `0 1rem`,
  justifyContent: `center`
})
