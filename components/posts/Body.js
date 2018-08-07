import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight';

import bash from 'highlight.js/lib/languages/bash';
import js from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/color-brewer.css';

import styled from 'styled-components'

const _Body = styled.div`
  h2:not(:first-of-type) {
    padding-top: 4rem;
  }
  
`;

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <_Body>
      { remark()
        .use(reactRenderer, {
          remarkReactComponents: {
            code: RemarkLowlight({
              js,
              bash
            })
          }
        })
        .processSync(this.props.body)
        .contents
      }
    </_Body>
  }
};

export default Body
