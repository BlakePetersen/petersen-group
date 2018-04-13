import MainNav from './nav/Main'
import Menu from './nav/Menu'
import Search from './nav/Search'
import Triangles from './Triangles'
import styled from 'styled-components'

const _Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(199, 204, 207, 0.5);
  border-bottom: 6px solid rgba(199, 204, 207, 0.5);
  text-align: center;
  color: rgba(255, 255, 255, .95);
  min-height: 160px;
  max-height: 28vh;
  transition: background-color 200ms ease;
  margin-bottom: 0;
`;

class Header extends React.Component {
  render() {
    return <_Header>
      <Menu />
      <MainNav />
      <Search />
      <Triangles />
    </_Header>
  }
};

export default Header
