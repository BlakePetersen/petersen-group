import { bindActionCreators } from 'redux'
import { initStore, toggleNavMenu, toggleSearchMenu } from '../../store'

import Link from 'next/link'
import styled from 'styled-components'
import withRedux from "../../utils/withRedux";

const _MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  a {
    display: inline-block;
    text-decoration: none;
    color: rgba(255, 255, 255, .95);
    text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
    transition: color 150ms ease 150ms, text-shadow 350ms ease, transform 350ms ease;
    
    &:hover {
        transform: translateY(-4px);
        color: rgb(255, 255, 255);
        text-shadow: 0 11px 1px rgba(0, 0, 0, 0.15);
    }
  }
  
  h1,
  a,
  svg {
    display: block;
    position: relative;
    z-index: 2;
    cursor: pointer;
    margin: 30px;
  }
  
  h1 {
    position: relative;
    margin: 1rem;
    font-size: 5rem;
    letter-spacing: -1px;
    font-weight: bold;
    font-family: 'Ubuntu Mono', sans-serif;
  }
  
  svg {
    fill: rgba(255, 255, 255, .95);
    width: 30px;
    filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.15));
    transition: filter 200ms ease, transform 200ms ease;

    &:hover { 
      transform: translateY(-4px);
      fill: rgb(255, 255, 255);
      filter: drop-shadow(0 11px 1px rgba(0, 0, 0, 0.15));
    }
  }
`;

class MainNav extends React.Component {
  toggleNavMenu = () => {
    this.props.toggleNavMenu()
  };

  toggleSearchMenu = () => {
    this.props.toggleSearchMenu()
  };

  render() {
    return <_MainNav className={'main-nav'}>
      <svg viewBox="0 0 8 8" id="menu" className="icon" onClick={this.toggleNavMenu}>
        <path d="M0 1v1h8v-1h-8zm0 2.969v1h8v-1h-8zm0 3v1h8v-1h-8z" id="menu"></path>
      </svg>

      <h1>
        <Link prefetch href="/"><a>BlakePetersen.io</a></Link>
      </h1>

      <svg viewBox="0 0 8 8" id="search" className="icon" onClick={this.toggleSearchMenu}>
        <path d="M3.5 0c-1.927 0-3.5 1.573-3.5 3.5s1.573 3.5 3.5 3.5c.592 0 1.166-.145 1.656-.406a1 1 0 0 0 .125.125l1 1a1.016 1.016 0 1 0 1.438-1.438l-1-1a1 1 0 0 0-.156-.125c.266-.493.438-1.059.438-1.656 0-1.927-1.573-3.5-3.5-3.5zm0 1c1.387 0 2.5 1.113 2.5 2.5 0 .661-.241 1.273-.656 1.719l-.031.031a1 1 0 0 0-.125.125c-.442.397-1.043.625-1.688.625-1.387 0-2.5-1.113-2.5-2.5s1.113-2.5 2.5-2.5z" id="magnifying-glass"></path>
      </svg>
    </_MainNav>
  }
}

const mapStateToProps = ({ navMenu, searchMenu }) => ({ navMenu, searchMenu });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavMenu: bindActionCreators(toggleNavMenu, dispatch),
    toggleSearchMenu: bindActionCreators(toggleSearchMenu, dispatch)
  }
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MainNav)
