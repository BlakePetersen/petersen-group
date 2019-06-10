import { getPost } from '../api/contentful'

import Body from '../components/posts/Body'
import Meta from '../components/posts/Meta'

import styled from 'styled-components'

const _Title = styled.h1`
  color: #435469;
`;

class Post extends React.Component {
	constructor(props) {
		super(props);
	}

	// disqusShortname = 'blakepetersen';
	// disqusConfig = {
	//   url: "/" + this.props.post.fields.slug + "/",
	//   identifier: this.props.post.fields.disqusId || false
	// };

	static async getInitialProps({ query }) {
		const _post = await getPost(query.slug);
		return {
			post: _post.items[0]
		}
	}

	render() {
		return <>
			<_Title>{ this.props.post.fields.title }</_Title>
			<Meta publishDate={ this.props.post.fields.publishDate } />
			<Body body={ this.props.post.fields.body } />
		</>
	}
};

export default Post
