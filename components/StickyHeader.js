import MainNav from './nav/Main'
import Menu from './nav/Menu'
import Search from './nav/Search'
import styled from 'styled-components'

const _StickyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 100;
  max-width: 100vw;
  width: 100%;
  background-color: #DDE2E5;
  background-size: 300px 100%;
  border-bottom: 6px solid #DDE2E5;
  text-align: center;
  color: rgba(255, 255, 255, .95);
  margin-bottom: 0;
  //box-shadow: 0 0 30px rgba(0, 0, 0, .3), 0 0 5px rgba(0, 0, 0, .2);
  top: 0;
  transition: background-color 200ms ease-in-out;
`;

class Header extends React.Component {
  render() {
    return <_StickyHeader>
      <Menu />
      <MainNav />
      <Search />
    </_StickyHeader>
  }
};


// Export with Redux Wrapper
export default Header

