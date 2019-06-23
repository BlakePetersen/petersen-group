import styled from 'styled-components'
import Link from 'next/link'

import Colors from '../../styles/colors'

const _TitleLink = styled.h1`
  	color: ${Colors.slate};
  	text-decoration: none;
  	cursor: pointer;
	font-size: 2rem;
	font-weight: normal;
`;

const Title = ({ title, slug }) =>
	<Link as={ `/posts/` + slug } href={ `/post?slug=` + slug } key={ slug } prefetch>
		<a>
			<_TitleLink>
				{ title }
			</_TitleLink>
		</a>
	</Link>;

export default Title
