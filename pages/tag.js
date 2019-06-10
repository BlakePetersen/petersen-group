// Content
import { getPostsByTag } from '../api/contentful'

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
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 2px;
`;

const _Description = styled.p``;

class Tag extends React.Component {
	constructor(props) {
		super(props)
	}

	static async getInitialProps({ query }) {
		const _posts = await getPostsByTag(query.tag);

		_posts.items = _posts.items.sort(sortBy('-fields.publishDate'));

		return {
			items: _posts.items,
			tag: query.tag
		}
	};

	render() {
		return <>
			{ this.props.items.map(item => (
				<_ListWrapper key={ item.fields.slug }>
					<Link as={`/posts/${item.fields.slug}`} href={`/post?slug=${item.fields.slug}`} prefetch>
						<a>
							<_TitleLink>
								{ item.fields.title }
							</_TitleLink>
						</a>
					</Link>

					<Meta publishDate={ item.fields.publishDate } />

					<_Description>
						{ item.fields.description }
					</_Description>
				</_ListWrapper>
			))}
		</>
	}
};

export default Tag
