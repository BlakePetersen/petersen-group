import styled from "styled-components";
import Link from 'next/link'

import Meta from '../posts/Meta'
import Title from '../posts/Title'
import Description from '../posts/Description'
import Tags from '../posts/Tags'

import Colors from '../../styles/colors'

const _ListWrapper = styled.div`
	display: grid;
	grid-gap: 2rem;
	padding: 4rem 0;

	&:not(:last-of-type) {
		border-bottom: 1px solid ${Colors.ash};
	} 
`;

const PostPreview = ({ item }) => <>
	<_ListWrapper>
		<Meta publishDate={ item.fields.publishDate } />
		<Title slug={ item.fields.slug } title={ item.fields.title } />
		<Description description={ item.fields.description } />
		{ item.fields.tags && <Tags tags={ item.fields.tags } /> }
	</_ListWrapper>
</>;

export default PostPreview
