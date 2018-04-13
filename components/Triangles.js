import triangles from './../lib/triangles'
import styled from 'styled-components'

const _Triangles = styled.div`
    box-shadow: inset 0 0 30px rgba(0, 0, 0, .1), inset 0 0 20px rgba(0, 0, 0, .2);
    visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 420ms ease; 
    background-size: cover;
    
    &.activate {
      opacity: 1;
      visibility: visible
    }
`;

class Triangles extends React.Component {
  componentDidMount() {
    triangles.init();
  };

  render() {
    return <_Triangles className="triangles" />
  }
};

export default Triangles
