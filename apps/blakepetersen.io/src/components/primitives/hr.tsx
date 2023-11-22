import styled from 'styled-components'
import Colors from '@/styles/colors'

interface HRProps {
  size?: string
}

const _Hr = styled.hr<HRProps>`
  border: none;
  border-top: ${props => props.size || `1px`} solid
    ${props => props.color || Colors.ash};
  width: 100%;
`

const Hr = props => <_Hr {...props} />

export default Hr
