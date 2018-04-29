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
  
  p {
    line-height: 1.5;
  
    > img {
      background: #F7FAFB;
      width: calc(100% - 4rem);
      margin: 2rem;
      box-shadow:  0 10px 40px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1);
    }
  }
  
  code,
  pre {
    font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #2e3c4b;
    color: #80a6ce;
  }
  
  pre {    
    padding: 1em;
    margin: 2rem;
    overflow: auto;
    box-shadow:  0 10px 40px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1);
    border: 3px solid #DDE2E5;
    background: #2e3c4b;
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  
  code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    border-right-color: #1f2932;
  }
  
  .line-numbers-rows > span:before {
    color: #2c3847;
  }
  
  .line-highlight {
    background: rgba(10, 163, 112, 0.2);
    background: -webkit-linear-gradient(left, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));
    background: linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0));
  }
  
  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;
  
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  
  }
  
  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }
  
  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: transparentize(#DDE2E5, .5);
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`;
