import styled from 'styled-components'

import Meta from '@/components/posts/meta'
import Title from '@/components/posts/title'
import Description from '@/components/posts/description'
import Tags from '@/components/posts/tags'
import Colors from '@/styles/colors'

interface ListWrapperProps {
  size?: string
}

const _ListWrapper = styled.div<ListWrapperProps>`
  display: grid;
  grid-gap: 2rem;

  :not(:last-child) {
    border-bottom: ${props => props.size || `1px`} solid
      ${props => props.color || Colors.ash};
    padding-bottom: 3rem;
  }
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
