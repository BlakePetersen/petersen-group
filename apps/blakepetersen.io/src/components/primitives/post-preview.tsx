import styled from 'styled-components'

import Meta from '@/components/posts/meta'
import Title from '@/components/posts/title'
import Description from '@/components/posts/description'
import Tags from '@/components/posts/tags'
import Colors from '@/styles/colors'

interface PostPreviewProps {
  size?: string
}

const _PostPreview = styled.div<PostPreviewProps>`
  &:not(&:last-child) {
    border-bottom: ${props => props.size || `1px`} solid
      ${props => props.color || Colors.ash};
    padding-bottom: 3rem;
  }
`

const PostPreview = ({ post }) => (
  <_PostPreview>
    <Meta publishDate={post?.fields.publishDate} />
    <Title slug={post?.fields.slug} title={post?.fields.title} />
    <Description description={post?.fields.description} />
    {post?.fields.tags && <Tags tags={post?.fields.tags} />}
  </_PostPreview>
)

export default PostPreview
