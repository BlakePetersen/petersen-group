import sortBy from 'sort-by';

import { getPosts } from '../api/contentful'

import PostPreview from '../components/layout/PostPreview'
import Hr from '../components/layout/Hr'
import Grid from "../components/layout/Grid";

const Index = ({ items }) => <Grid>
	{ items.map((item, index) => <div key={ index }>
		<PostPreview item={ item }  />
		{ index !== (items.length - 1) && <Hr  key={ index } /> }
	</div>) }
</Grid>;

Index.getInitialProps = async () => {
	const _posts = await getPosts();
	_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
	return {
		items: _posts.items,
	}
};

export default Index
