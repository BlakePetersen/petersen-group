import Link from 'next/link'
import Triangles from './../Triangles'
import styled from 'styled-components'

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
    color: rgba(255, 255, 255, .95);
    text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
    transition: color 150ms ease 150ms, text-shadow 300ms ease-out, transform 300ms ease;
    
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
    fill: rgba(255, 255, 255, .95);
    width: 30px;
    filter: drop-shadow(0 7px 0 rgba(0, 0, 0, 0.15));
    transition: filter 300ms ease, transform 300ms ease;
    flex-shrink: 0;

    &:hover { 
      transform: translateY(-4px);
      fill: rgb(255, 255, 255);
      filter: drop-shadow(0 11px 1px rgba(0, 0, 0, 0.15));
    }
  }
`;

const _Content = styled.div`
  z-index: 3;
`;

const _Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.75rem;
  font-weight: 900;
  margin: 1.5rem;
  position: relative;
  letter-spacing: -1px;
  transition: font-size 300ms ease-out;
  white-space: nowrap;

  .is-post & {
    transition: opacity 150ms ease-out, transform 300ms ease-out;
    opacity: 0;
    transform: translateY(-100px);
  }
  
  .full.is-post & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const _Title = styled.div`
  padding: 0 0 .5rem;
`;

const _Subtitle = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    display: block;
    letter-spacing: 5px;
    font-weight: 400;
`;

const _PageTitle = styled.h2`
    max-width: 1000px;
    width: calc(50vw + 300px);
    min-width: 300px;
    opacity: 0;
    font-size: 3rem; 
    font-weight: bold;
    transform: scale(.8) translateY(-400px);
    transition: opacity 150ms ease, transform 300ms ease, font-size 300ms ease-out;
  
  .is-post & {
    margin: -5rem 0 -4rem;
    transform: scale(.6) translateY(0);
    opacity: 1;
  }
  
  .full.is-post & {
    margin: 0;
    transform: scale(1) translateY(0);
  }
`;

const _Meta = styled.div`
  .is-post & {
    padding: 1.25rem;
    transition: opacity 150ms ease-out, transform 300ms ease-out;
    opacity: 0;
    transform: translateY(100px);
  }
  
  .full.is-post & {
    opacity: 1;
    transform: translateY(0);
  }
`;

class MainNav extends React.Component {
  constructor(props){
    super(props);
  }

  toggleNavMenu = () => {
    this.props.toggleNavMenu()
  };

  toggleSearchMenu = () => {
    this.props.toggleSearchMenu()
  };

  render() {
    return <_MainNav
      className={ `main-nav full ${ this.props.isPost ? 'is-post' : '' }` }
    >
      {/*<svg viewBox="0 0 8 8" id="menu" className="icon" onClick={this.toggleNavMenu}>*/}
      {/*<path d="M0 1v1h8v-1h-8zm0 2.969v1h8v-1h-8zm0 3v1h8v-1h-8z" id="menu"></path>*/}
      {/*</svg>*/}

      <_Content>
        <_Logo>
          <Link prefetch href={`/`} as={`/`}>
            <a>
              <_Title>ʙ ʟ Λ ĸ ᴇ </_Title>
              <_Subtitle>Good Times in Web Development</_Subtitle>
            </a>
          </Link>
        </_Logo>

        {/*{ this.props.pageTitle &&*/}
        {/*<_PageTitle>*/}
        {/*<Link prefetch href="/"><a>{ this.props.pageTitle }</a></Link>*/}
        {/*</_PageTitle>*/}
        {/*}*/}

        {/*{ this.props.pageDate &&*/}
        {/*<_Meta>*/}
        {/*<Moment format={`MMMM Do, YYYY`}>{ this.props.pageDate }</Moment>*/}
        {/*</_Meta>*/}
        {/*}*/}

      </_Content>

      {/*<svg viewBox="0 0 8 8" id="search" className="icon" onClick={this.toggleSearchMenu}>*/}
      {/*<path d="M3.5 0c-1.927 0-3.5 1.573-3.5 3.5s1.573 3.5 3.5 3.5c.592 0 1.166-.145 1.656-.406a1 1 0 0 0 .125.125l1 1a1.016 1.016 0 1 0 1.438-1.438l-1-1a1 1 0 0 0-.156-.125c.266-.493.438-1.059.438-1.656 0-1.927-1.573-3.5-3.5-3.5zm0 1c1.387 0 2.5 1.113 2.5 2.5 0 .661-.241 1.273-.656 1.719l-.031.031a1 1 0 0 0-.125.125c-.442.397-1.043.625-1.688.625-1.387 0-2.5-1.113-2.5-2.5s1.113-2.5 2.5-2.5z" id="magnifying-glass"></path>*/}
      {/*</svg>*/}

      <Triangles />
    </_MainNav>
  }
}

export default MainNav
