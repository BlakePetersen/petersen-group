import styled from 'styled-components'

const _Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 3rem;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

const Content = ({ children }) => (
  <_Content>
    <_Container>
      { children }
    </_Container>
  </_Content>
);

export default Content