// Content
import { getPosts, getPostsByTag } from '../api/contentful'

// Layout
import Link from 'next/link'
import Meta from '../components/posts/Meta'
import sortBy from 'sort-by';

// Styled Components
import styled from 'styled-components'

const _ListWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid #e5e8e9;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  } 
`;

const _TitleLink = styled.h1`
  	color: #435469;
  	text-decoration: none;
  	cursor: pointer;
	font-size: 2rem;	
`;

const _Description = styled.p``;

class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	static async getInitialProps() {
		const _posts = await getPosts();

		const _testPosts = await getPostsByTag('A11y');

		console.log('test', _testPosts.items);

		_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));
		return {
			posts: _posts,
		}
	};

	render() {
		return <>
			{ this.props.posts.items.map((item, index) => (
				<_ListWrapper key={ item.fields.slug }>

					<Meta publishDate={item.fields.publishDate} />

					<Link as={`/posts/${item.fields.slug}`} href={`/post?slug=${item.fields.slug}`} prefetch>
						<a>
							<_TitleLink>
								{ item.fields.title }
							</_TitleLink>
						</a>
					</Link>

					<_Description>
						{ item.fields.description }
					</_Description>

				</_ListWrapper>
			))}
        </>
	}
};

export default Index
