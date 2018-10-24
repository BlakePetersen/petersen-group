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
    ProgressBar(ReactDOM.findDOMNode(this));
  }

  render() {
    return <>
      <_ProgressBar />
    </>
  }
}


export default PageProgress
