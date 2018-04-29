import triangles from './../lib/triangles'
import styled from 'styled-components'

const _Triangles = styled.div`
    visibility: hidden;
    position: absolute;
    width: 100%;
    height: 210px;
    z-index: 1;
    opacity: 0;
    transition: opacity 420ms ease, transform 420ms ease-out; 
    background-size: 100vw 210px;
    transform: translateY(-22px);
    
    &.activate {
      opacity: 1;
      visibility: visible
    }
    
    .full & {
      transform: translateY(0);
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
