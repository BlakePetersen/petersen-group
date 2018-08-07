import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${styledNormalize}

  body, html {
   background: #F7FAFB;
   color: rgba(0,0,0,.5);
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;
  }
  
  a {
    color: gray;
    
    &:hover {
      color: #535353;
    }
  }
  
  p {
    line-height: 2;
  
    > img {
      background: #F7FAFB;
      width: calc(100% - 4rem);
      margin: 2rem;
      box-shadow:  0 10px 40px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1);
    }
  }
  
  code.hljs,
  pre {
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
    font-size: 1rem;
    direction: ltr;
    text-align: left;
    tab-size: 4;
    hyphens: none;
    white-space: pre;
    background: #eaeef3;
    border-radius: 4px;
  }
  
  pre {
    overflow: auto;
    line-height: 1.5;
    padding: .75rem 1rem;

    > code.hljs {
      padding: 0;
    }
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
