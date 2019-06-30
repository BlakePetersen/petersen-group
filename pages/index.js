import sortBy from 'sort-by';
import Head from 'next/head';

import { getPosts } from '../api/contentful'

import PostPreview from '../components/layout/PostPreview'
import Hr from '../components/layout/Hr'
import Grid from "../components/layout/Grid";

const Index = ({ items }) => <Grid>
	{ items.map((item, index) => <>
		<PostPreview item={ item } key={ index } />
		{ index !== (items.length - 1) && <Hr /> }
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
