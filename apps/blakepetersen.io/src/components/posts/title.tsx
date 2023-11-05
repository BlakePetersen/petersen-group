import styled from 'styled-components'
import { Link as ThemedLink } from '@radix-ui/themes'
import Link from 'next/link'

import Colors from '@/styles/colors'

const _TitleLink = styled.h1`
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: normal;
`

const Title = ({ title, slug }) => (
  <ThemedLink asChild>
    <Link href={`/posts/${slug}`}>
      <_TitleLink>{title}</_TitleLink>
    </Link>
  </ThemedLink>
)

export default Title
