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
`;
