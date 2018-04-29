import styled from 'styled-components'

const _Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 5rem;
`;

const _Container = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
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