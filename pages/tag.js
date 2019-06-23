// Dependencies
import sortBy from 'sort-by';

// Content
import { getPostsByTag } from '../api/contentful'

// Layout
import Colors from '../styles/colors'
import PostPreview from '../components/layout/PostPreview'

// Styled Components
import styled from 'styled-components';
import Grid from "../components/layout/Grid";

const _Title = styled.h1`
	font-weight: normal;
	justify-self: center;
	padding: 1.5rem;
	letter-spacing: .33em;
	text-transform: uppercase;
	border-bottom: 1px solid ${Colors.concrete};
`;

const Tag = ({ items, tag }) => <Grid>
	<_Title>{ tag }</_Title>

	{ items.map((item, index) => <PostPreview item={ item } key={ index } />) }
</Grid>;

Tag.getInitialProps = async ({ query }) => {
	const _posts = await getPostsByTag(query.tag);

	_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));

	return {
		items: _posts.items,
		tag: query.tag
	}
};

export default Tag
