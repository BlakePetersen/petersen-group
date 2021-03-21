import React from "react";
import ReactDOM from 'react-dom'
import withRedux from "../../lib/withRedux";
import { bindActionCreators } from 'redux'
import { initStore, toggleNavMenu } from '../../store'

import Link from 'next/link'
import styled from 'styled-components'

const _NavMenu = styled.div`
  background-color: #bdccdc;
  position: absolute;
  width: 200px;
  height: 100vh;
  z-index: 1000;
  top: 0;
  left: 0;
  transform: translateX(-220px);
  box-shadow: 10px 0 30px rgba(0, 0, 0, .15), 2px 0 10px rgba(0, 0, 0, .15);
  transition: transform 200ms ease-in-out;
  flex-shrink: 0;
  
  &.opened{
      transform: translateX(0);
  }
`;

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // Methods
  handleClickOutside = (event) => {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(event.target)) && this.props.navMenu) {
      this.toggleNavMenu()
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  toggleNavMenu = () => {
    this.props.toggleNavMenu()
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
    return <_NavMenu
      className={`main-nav ${this.props.navMenu ? 'opened' : 'closed'}`}
    >
        <Link href={'/'}><a>Home</a></Link>
    </_NavMenu>
  }
};

const mapStateToProps = ({ navMenu }) => ({ navMenu });

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavMenu: bindActionCreators(toggleNavMenu, dispatch),
  }
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(NavMenu)
