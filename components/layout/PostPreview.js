import styled from "styled-components";

import Meta from '../posts/Meta'
import Title from '../posts/Title'
import Description from '../posts/Description'
import Tags from '../posts/Tags'


const _ListWrapper = styled.div`
	display: grid;
	grid-gap: 2rem;
`;

const PostPreview = ({ item }) =>
	<_ListWrapper>
		<Meta publishDate={ item.fields.publishDate } />
		<Title slug={ item.fields.slug } title={ item.fields.title } />
		<Description description={ item.fields.description } />
		{ item.fields.tags && <Tags tags={ item.fields.tags } /> }
	</_ListWrapper>;

export default PostPreview
