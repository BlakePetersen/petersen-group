import Link from 'next/link'
import styled from 'styled-components'

const _Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 4rem 0;
  font-family: 'Open Sans', sans-serif;
  font-size: .85rem;
  line-height: 1.5;
  color: #BBC7CC;
  text-align: center;
  background: #F7FAFB;
  border-top: 6px solid #DDE2E5;
  
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
    color: #BBC7CC;
    font-weight: bold;
    height: 1rem;
    text-decoration: none;
    border-bottom: #BBC7CC 0 solid;
    padding-bottom: 2px;
    transition: border-width 150ms ease 50ms, transform 250ms ease;
  
    &:hover {
      transform: translateY(-4px);
      border-width: 2px;
    } 
  }
`;

const Footer = () => (
  <_Footer>
    <p>
      <Link as="/" href="/">
        <a>BlakePetersen.io</a>
      </Link> • { new Date().getFullYear() }
    </p>

    <p>
      <em>The views expressed on this site are my own and do not, in any way, represent the views of my clients or employer.</em>
    </p>
  </_Footer>
);

export default Footer
