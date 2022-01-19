import Link from 'next/link'
import styled from 'styled-components'
import { rgba } from 'polished'

import Colors from '@/styles/colors'

const _Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 4rem 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${rgba(Colors.slate, 0.85)};
  text-align: center;
  background: ${Colors.snow};
  border-top: 6px solid ${Colors.ash};

  h3 {
    margin-bottom: 0;
  }

  p {
    max-width: 500px;
    padding: 0 1rem;
    text-align: center;
    overflow: visible;
  }

  a {
    display: inline-block;
    color: ${rgba(Colors.slate, 0.85)};
    font-weight: bold;
    height: 1rem;
    text-decoration: none;
    border-bottom: ${rgba(Colors.slate, 0.85)} 0 solid;
    padding-bottom: 2px;
    transition: border-width 150ms ease 50ms, transform 250ms ease;

    &:hover {
      transform: translateY(-4px);
      border-width: 2px;
    }
  }
`

const Footer = () => (
  <_Footer>
    <p>
      <Link as="/" href="/">
        <a>BlakePetersen.io</a>
      </Link>{' '}
      • {new Date().getFullYear()}
    </p>

    <p>
      <em>
        The views expressed on this site are my own and do not, in any way,
        represent the views of my clients or employer.
      </em>
    </p>
  </_Footer>
)

export default Footer
