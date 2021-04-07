import React from "react";
import { useRef, useEffect, useState } from 'react';

import MainNav from '../nav/Main'
import Menu from '../nav/Menu'
import PageProgress from '../nav/PageProgress'
import Search from '../nav/Search'
import styled from 'styled-components'
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

const _StickyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 100;
  max-width: 100vw;
  width: 100%;
  background-color: #DDE2E5;
  background-size: 300px 100%;
  text-align: center;
  color: rgba(255, 255, 255, .95);
  margin-bottom: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, .15), 0 0 5px rgba(0, 0, 0, .2);
  top: 0;
  transition: background 300ms ease, transform 300ms ease;
  transform: translateY(0);

  ${({ isTop }) => !isTop && `
    transform: translateY(-3.75rem);
  `}
`;

const Header = () => {
    const [isTop, setIsTop] = useState({
        isTop: false
    })

    useScrollPosition(
        ({ prevPos, currPos }) => {
            setIsTop(currPos.y > -72)
        }, [isTop]
    )

    return <_StickyHeader isTop={isTop}>
        <Menu />
        <MainNav isTop={isTop} />
        {/*<Search />*/}
        <PageProgress />
    </_StickyHeader>

};


export default Header

