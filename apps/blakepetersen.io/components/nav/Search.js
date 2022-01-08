import React from "react";
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { initStore, toggleNavMenu, toggleSearchMenu } from '../../store'

import Link from 'next/link'
import styled from 'styled-components'
import withRedux from "../../lib/withRedux";

const _SearchMenu = styled.div`
  background-color: #18443b;
  position: absolute;
  width: 200px;
  height: 100vh;
  z-index: 1000;
  top: 0;
  right: 0;
  transform: translateX(220px);
  box-shadow: -10px 0 30px rgba(0, 0, 0, .15), -2px 0 10px rgba(0, 0, 0, .15);
  transition: transform 200ms ease-in-out;
  
  &.opened{
      transform: translateX(0);
  }
`;

class SearchMenu extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // Methods
  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(event.target)) && this.props.searchMenu) {
      this.toggleSearchMenu()
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  toggleSearchMenu = () => {
    this.props.toggleSearchMenu()
  };

  // React Lifecycle Functions
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  // Drop it in
  render() {
    return <_SearchMenu
      className={`main-nav ${this.props.searchMenu ? 'opened' : 'closed'}`}
      ref={this.wrapperRef}
    >
        <Link href={'/'}><a>Home</a></Link>
    </_SearchMenu>
  }
}

// Attach State to Props
const mapStateToProps = ({ searchMenu }) => ({ searchMenu });

// Attach Dispatch Methods to Props
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavMenu: bindActionCreators(toggleNavMenu, dispatch),
    toggleSearchMenu: bindActionCreators(toggleSearchMenu, dispatch)
  }
};

// Export with Redux Wrapper
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(SearchMenu)
