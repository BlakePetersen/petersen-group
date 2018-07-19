import Moment from 'react-moment'
import styled from 'styled-components'

const _Meta = styled.h3`
  color: transparentize(#435469, .75);
`;

class Meta extends React.Component {
  render() {
    return <>
      <_Meta>
        <Moment format={ `MMMM Do, YYYY` }>{ this.props.publishDate }</Moment>
      </_Meta>
    </>
  }
}

export default Meta
