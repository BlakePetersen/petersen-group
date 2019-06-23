import { getPosts } from '../api/contentful'
import sortBy from 'sort-by';
import PostPreview from '../components/layout/PostPreview'

const Index = ({ items }) => items.map((item, index) => <>
		<PostPreview item={ item } key={ index } />
	</>);

Index.getInitialProps = async () => {
	const _posts = await getPosts();
	_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
	return {
		items: _posts.items,
	}
};

export default Index
