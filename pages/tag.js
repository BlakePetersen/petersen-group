// Dependencies
import sortBy from 'sort-by';

// Content
import { getPostsByTag } from '../api/contentful'

// Layout
import PostPreview from '../components/layout/PostPreview'
import Grid from "../components/layout/Grid";
import Hr from '../components/layout/Hr'

// Styled Components
import styled from 'styled-components';
import Colors from '../styles/colors'

const _Title = styled.h2`
	font-weight: normal;
	justify-self: center;
	padding: 1.5rem;
	letter-spacing: .33em;
	text-transform: uppercase;
	border-bottom: 1px solid ${Colors.concrete};
`;

const Tag = ({ items, tag }) => <>
	<Head>
		<title>{ tag } posts &mdash; ʙ ʟ Λ ĸ ᴇ</title>
	</Head>

	<Grid>
		<_Title>{ tag }</_Title>

		<Grid>
			{ items.map((item, index) => <>
				<PostPreview item={ item } key={ index } />
				{ index !== (items.length - 1) && <Hr /> }
			</>) }
		</Grid>
	</Grid>
</>;

Tag.getInitialProps = async ({ query }) => {
	const _posts = await getPostsByTag(query.tag);

	_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));

	return {
		items: _posts.items,
		tag: query.tag
	}
};

export default Tag
