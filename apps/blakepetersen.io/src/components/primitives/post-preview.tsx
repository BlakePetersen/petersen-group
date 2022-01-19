import styled from 'styled-components'

import Meta from '@/components/posts/meta'
import Title from '@/components/posts/title'
import Description from '@/components/posts/description'
import Tags from '@/components/posts/tags'

const _ListWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const PostPreview = ({ post }) => (
  <_ListWrapper>
    <Meta publishDate={post?.fields.publishDate} />
    <Title slug={post?.fields.slug} title={post?.fields.title} />
    <Description description={post?.fields.description} />
    {post?.fields.tags && <Tags tags={post?.fields.tags} />}
  </_ListWrapper>
)

export default PostPreview
