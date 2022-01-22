import styled from 'styled-components'

import Colors from '@/styles/colors'
import ArtaxLink from '@/components/primitives/link'

const _TitleLink = styled.h1`
  color: ${Colors.slate};
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: normal;
`

const Title = ({ title, slug }) => (
  <ArtaxLink href={`/posts/${slug}`}>
    <_TitleLink>{title}</_TitleLink>
  </ArtaxLink>
)

export default Title
