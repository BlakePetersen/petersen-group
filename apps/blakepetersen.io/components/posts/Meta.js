import Moment from 'react-moment'
import styled from 'styled-components'

import Colors from '../../styles/colors'

const _Meta = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: transparentize(${Colors.slate}, .75);
	font-size: .75rem;
	text-transform: uppercase;
	letter-spacing: .25rem;
`;

const Meta = ({ publishDate }) => <_Meta>
	<Moment format={ `MMMM Do, YYYY` }>{ publishDate }</Moment>
</_Meta>;

export default Meta
