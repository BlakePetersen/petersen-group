import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import Triangles from '@/components/triangles'
import { Link as _Link } from '@radix-ui/themes'

interface TitleProps {
  $isTop: boolean
}

const _MainNav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;

  a {
    display: inline-block;
    text-decoration: none;
    transition:
      color 150ms ease 150ms,
      text-shadow 300ms ease-out,
      transform 300ms ease;

    &:hover {
      transform: translateY(-6px);
    }
  }

  a,
  svg {
    display: block;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  svg {
    fill: rgb(255, 255, 255);
    width: 30px;
    filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.15));
    transition:
      filter 300ms ease,
      transform 300ms ease;
    flex-shrink: 0;

    &:hover {
      transform: translateY(-5px);
      fill: rgb(255, 255, 255);
      filter: drop-shadow(0 11px 1px rgba(0, 0, 0, 0.15));
    }
  }
`

const _Content = styled.div`
  z-index: 3;
`

const _Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.75rem;
  font-weight: 900;
  margin: 1rem;
  position: relative;
  letter-spacing: -1px;
  white-space: nowrap;

  .is-post & {
    transition:
      opacity 150ms ease-out,
      transform 300ms ease-out;
    opacity: 0;
    transform: translateY(-100px);
  }

  .full.is-post & {
    opacity: 1;
    transform: translateY(0);
  }
`

const _Title = styled.div<TitleProps>`
  opacity: ${props => (props.$isTop ? 1 : 0)};
  transition: opacity 300ms ease;
  text-decoration: none;
`

const _Subtitle = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  display: block;
  letter-spacing: 5px;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
`

const MainNav = ({ isTop = true }) => {
  return (
    <_MainNav className={`main-nav full`}>
      <_Content>
        <_Logo>
          <Link href={`/`} passHref>
            <_Link color={'gray'} asChild>
              <_Title $isTop={isTop}>ʙ ʟ Λ ĸ ᴇ</_Title>
            </_Link>

            <_Link color={'gray'} asChild>
              <_Subtitle>Good Times in Web Development</_Subtitle>
            </_Link>
          </Link>
        </_Logo>
      </_Content>
      <Triangles />
    </_MainNav>
  )
}

export default MainNav
