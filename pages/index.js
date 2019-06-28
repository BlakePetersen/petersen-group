import styled from 'styled-components'
import sortBy from 'sort-by';

import { getPosts } from '../api/contentful'

import PostPreview from '../components/layout/PostPreview'

import Colors from '../styles/colors'
import Grid from "../components/layout/Grid";

const _Hr = styled.hr`
	border: none;
	border-top: 1px solid ${ Colors.ash };
	width: 100%;
`;

const Index = ({ items }) => <Grid>
	{ items.map((item, index) => <>
		<PostPreview item={ item } key={ index } />
		{ index !== (items.length - 1) && <_Hr /> }
	</>) }
</Grid>;

Index.getInitialProps = async () => {
	const _posts = await getPosts();
	_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
	return {
		items: _posts.items,
	}
};

export default Index
