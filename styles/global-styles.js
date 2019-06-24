import styledNormalize from 'styled-normalize'
import { darken } from 'polished'
import { createGlobalStyle } from 'styled-components'

import '../static/assets/fonts.scss'

import Colors from './colors'

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  body, html {
   background: ${Colors.snow};
   color: rgba(0,0,0,.5);
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;	
  }
  
  a {
    color: ${Colors.ash};
    transition: color 180ms ease-in;
    
    &:hover {
      color: ${darken(.1, Colors.concrete)};
    }
  }
  
  h1 {
  	margin: 0;
  }
  
  p {
    line-height: 1.8;
    margin: 0;
  }
  
  code {
    padding: .5rem;
    position: relative;
    white-space: inherit;
  }
  
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity 250ms, transform 250ms;
  }
  
  .page-transition-exit {
    opacity: 1;
  }
  
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
  
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
`;

export default GlobalStyles
