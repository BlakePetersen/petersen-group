import Link from 'next/link'
import Triangles from './../Triangles'
import _ from 'lodash'
import styled from 'styled-components'
import withRedux from "../../lib/withRedux"
import { bindActionCreators } from 'redux'
import { initStore, toggleNavMenu, toggleSearchMenu, toggleHeaderFullHeight } from '../../store'

const _MainNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;    
  overflow: hidden;
  transition: max-height 300ms ease-out;
  height: 100%;
  
  &.full {
    h1 {
      font-size: 3.5rem;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: rgba(255, 255, 255, .95);
    text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
    transition: color 150ms ease 150ms, text-shadow 300ms ease-out, transform 350ms ease;
    
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
    margin: 10px;
  }
  
  h1 {
    position: relative;
    margin: 1rem;
    font-size: 2.5rem;
    letter-spacing: -1px;
    font-weight: bold;
    font-family: 'Ubuntu Mono', sans-serif;
    transition: font-size 300ms ease-out;
  }
  
  svg {
    fill: rgba(255, 255, 255, .95);
    width: 30px;
    filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.15));
    transition: filter 200ms ease, transform 200ms ease;
    flex-shrink: 0;

    &:hover { 
      transform: translateY(-4px);
      fill: rgb(255, 255, 255);
      filter: drop-shadow(0 11px 1px rgba(0, 0, 0, 0.15));
    }
  }
`;

class MainNav extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = (event) => {
    const _distanceScrolled = event.target.scrollingElement.scrollTop;
    if ((_distanceScrolled > 30 && this.props.headerFullHeight) || (_distanceScrolled <= 30 && !this.props.headerFullHeight)) {
      this.toggleHeaderFullHeight()
    }
  };

  toggleHeaderFullHeight = () => {
    this.props.toggleHeaderFullHeight()
  };


  toggleNavMenu = () => {
    this.props.toggleNavMenu()
  };

  toggleSearchMenu = () => {
    this.props.toggleSearchMenu()
  };

  // React Lifecycle Functions
  componentDidMount() {
    document.addEventListener('scroll', _.throttle((event) => {
      this.handleScroll(event)
    }, 50));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  render() {
    return <_MainNav className={`main-nav ${ this.props.headerFullHeight ? 'full' : '' } ${ this.props.isPost ? 'is-post' : '' }`}>
      {/*<svg viewBox="0 0 8 8" id="menu" className="icon" onClick={this.toggleNavMenu}>*/}
        {/*<path d="M0 1v1h8v-1h-8zm0 2.969v1h8v-1h-8zm0 3v1h8v-1h-8z" id="menu"></path>*/}
      {/*</svg>*/}

      <div>
        <h1>
          <Link prefetch href="/"><a>BlakePetersen.io</a></Link>
        </h1>

        <h2>
          <Link prefetch href="/"><a>{ this.props.pageTitle }</a></Link>
        </h2>
      </div>

      {/*<svg viewBox="0 0 8 8" id="search" className="icon" onClick={this.toggleSearchMenu}>*/}
        {/*<path d="M3.5 0c-1.927 0-3.5 1.573-3.5 3.5s1.573 3.5 3.5 3.5c.592 0 1.166-.145 1.656-.406a1 1 0 0 0 .125.125l1 1a1.016 1.016 0 1 0 1.438-1.438l-1-1a1 1 0 0 0-.156-.125c.266-.493.438-1.059.438-1.656 0-1.927-1.573-3.5-3.5-3.5zm0 1c1.387 0 2.5 1.113 2.5 2.5 0 .661-.241 1.273-.656 1.719l-.031.031a1 1 0 0 0-.125.125c-.442.397-1.043.625-1.688.625-1.387 0-2.5-1.113-2.5-2.5s1.113-2.5 2.5-2.5z" id="magnifying-glass"></path>*/}
      {/*</svg>*/}

      <Triangles />
    </_MainNav>
  }
}

const mapStateToProps = ({ headerFullHeight, isPost, navMenu, pageTitle, searchMenu }) => ({ headerFullHeight, isPost, navMenu, pageTitle, searchMenu });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHeaderFullHeight: bindActionCreators(toggleHeaderFullHeight, dispatch),
    toggleNavMenu: bindActionCreators(toggleNavMenu, dispatch),
    toggleSearchMenu: bindActionCreators(toggleSearchMenu, dispatch)
  }
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(MainNav)
