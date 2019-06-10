import { getPosts } from '../api/contentful'
import sortBy from 'sort-by';
import PostPreview from '../components/layout/PostPreview'

class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	static async getInitialProps() {
		const _posts = await getPosts();
		_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
		return {
			posts: _posts,
		}
	};

	render() {
		return this.props.posts.items.map((item, index) => <>
			<PostPreview item={ item } key={ index } />
		</>)
	}
};

export default Index
