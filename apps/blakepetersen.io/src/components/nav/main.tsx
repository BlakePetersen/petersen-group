import styled from 'styled-components'
import React from 'react'
import Link from 'next/link'
import Triangles from '@/components/triangles'

interface TitleProps {
  isTop: boolean
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
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
    transition:
      color 150ms ease 150ms,
      text-shadow 300ms ease-out,
      transform 300ms ease;

    &:hover {
      transform: translateY(-4px);
      color: rgb(255, 255, 255);
      text-shadow: 0 11px 1px rgba(0, 0, 0, 0.15);
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
    fill: rgba(255, 255, 255, 0.95);
    width: 30px;
    filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.15));
    transition:
      filter 300ms ease,
      transform 300ms ease;
    flex-shrink: 0;

    &:hover {
      transform: translateY(-4px);
      fill: rgb(255, 255, 255);
      filter: drop-shadow(0 11px 1px rgba(0, 0, 0, 0.15));
    }
  }
`

const _Content = styled.div`
  z-index: 3;
`

const _Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.75rem;
  font-weight: 900;
  margin: 1.5rem;
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
  padding: 0 0 0.5rem;
  opacity: 1;
  transition: opacity 300ms ease;

  ${({ isTop }) =>
    !isTop &&
    `
    opacity: 0;
  `}
`

const _Subtitle = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  display: block;
  letter-spacing: 5px;
  font-weight: 400;
  line-height: 1.5rem;
`

const MainNav = ({ isTop = true }) => {
  return (
    <_MainNav className={`main-nav full`}>
      <_Content>
        <_Logo>
          <Link href={`/`}>
            <_Title isTop={isTop}>ʙ ʟ Λ ĸ ᴇ</_Title>
            <_Subtitle>Good Times in Web Development</_Subtitle>
          </Link>
        </_Logo>
      </_Content>
      <Triangles />
    </_MainNav>
  )
}

export default MainNav
