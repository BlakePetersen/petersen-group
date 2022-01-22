import styled from 'styled-components'
import { rgba } from 'polished'
import Link from 'next/link'

import Colors from '@/styles/colors'

const _Tags = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: -0.5rem;

  a {
    text-decoration: none;
  }
`

const _Tag = styled.div`
  background-color: ${rgba(Colors.ash, 0.35)};
  color: ${rgba(Colors.slate, 0.85)};
  border-radius: 4px;
  padding: 0.35rem;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.33em;
  margin: 0.5rem;
  transition: color 250ms ease, background-color 250ms ease,
    transform 250ms ease, box-shadow 250ms ease;

  &:hover:not(:active) {
    background-color: ${rgba(Colors.ash, 0.5)};
    color: ${Colors.slate};
    transform: translateY(-3px);
    box-shadow: 0 3px 0 4px ${rgba(Colors.slate, 0.2)};
  }
`

const Tags = ({ tags }) => (
  <_Tags>
    {tags &&
      tags.map((tag, i) => (
        <Link href={`/tags/${tag}`} key={i}>
          <a>
            <_Tag>{tag}</_Tag>
          </a>
        </Link>
      ))}
  </_Tags>
)

export default Tags
