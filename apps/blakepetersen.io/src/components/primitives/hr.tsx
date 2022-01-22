import styled from 'styled-components'
import Colors from '@/styles/colors'

const _Hr = styled.hr`
  border: none;
  border-top: ${(props) => props.size || `1px`} solid
    ${(props) => props.color || Colors.ash};
  width: 100%;
`

const Hr = (props) => <_Hr {...props} />

export default Hr
