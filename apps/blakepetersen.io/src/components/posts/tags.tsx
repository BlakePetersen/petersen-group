import styled from 'styled-components'
import Link from 'next/link'
import { Link as ThemedLink } from '@radix-ui/themes'

const _Tags = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: -0.5rem;

  a {
    text-decoration: none;
  }
`

const _Tag = styled.div`
  background-color: var(--gray-4);
  border-radius: 4px;
  padding: 0.35rem;
  font-size: 0.65rem;
  text-transform: uppercase;
  margin: 0.5rem;
  transition:
    color 250ms ease,
    background-color 250ms ease,
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover:not(:active) {
    background-color: var(--gray-4);
    transform: translateY(-3px);
    box-shadow: 0 3px 0 4px var(--gray-6);
  }
`

const Tags = ({ tags }) => (
  <_Tags>
    {tags &&
      tags.map((tag, i) => (
        <ThemedLink asChild>
          <Link href={`/tags/${tag}`} key={i}>
            <_Tag>{tag}</_Tag>
          </Link>
        </ThemedLink>
      ))}
  </_Tags>
)

export default Tags
