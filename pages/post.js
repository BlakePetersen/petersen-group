import styled from 'styled-components'
import { getPost } from '../api/contentful'
import Body from '../components/posts/Body'
import Tags from '../components/posts/Tags'
import Meta from '../components/posts/Meta'
import Title from '../components/posts/Title'

const _PostWrapper = styled.div`
	display: grid;
	grid-gap: 2rem;
`;

const Post = ({ post }) => <_PostWrapper>
	<Meta publishDate={ post.fields.publishDate } />
	<Title slug={ post.fields.slug } title={ post.fields.title } />
	<Body body={ post.fields.body } />
	{ post.fields.tags && <Tags tags={ post.fields.tags } /> }
</_PostWrapper>;

Post.getInitialProps = async ({ res, req, query }) => {
	const _post = await getPost(query.slug);

	return {
		post: _post.items[0]
	}
};

export default Post
