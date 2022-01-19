import React, { useState } from 'react'

import MainNav from '@/components/nav/main'
import PageProgress from '@/components/nav/page-progress'
import styled from 'styled-components'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const _StickyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 100;
  max-width: 100vw;
  width: 100%;
  background-color: #dde2e5;
  background-size: 300px 100%;
  text-align: center;
  color: rgba(0, 255, 255, 0.95);
  margin-bottom: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.2);
  top: 0;
  transition: background 300ms ease, transform 300ms ease;
  transform: translateY(0);

  ${({ isTop }) =>
    !isTop &&
    `
    transform: translateY(-3.75rem);
  `}
`

const Header = () => {
  const [isTop, setIsTop] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      setIsTop(currPos.y > -72)
    },
    [isTop]
  )

  return (
    <_StickyHeader isTop={isTop}>
      {/*<Menu />*/}
      <MainNav isTop={isTop} />
      {/*<Search />*/}
      <PageProgress />
    </_StickyHeader>
  )
}

export default Header
