import { Component } from 'react';
import ReactDOM from 'react-dom'
import ProgressBar from '../../lib/progress-bar'

import styled from 'styled-components';

const _ProgressBar = styled.div`
  height: 6px;
  width: 100%;
  display: flex;
`;

class PageProgress extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (process.browser) {
      const domNode = ReactDOM.findDOMNode(this);
      ProgressBar(domNode).init()
    }
  }

  render() {
    return <>
        <_ProgressBar />
    </>
  }
}


export default PageProgress
