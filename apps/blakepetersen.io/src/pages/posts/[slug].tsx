import styled from 'styled-components'
import Head from 'next/head'

import { getPost } from '@/pages/api/contentful'

import Body from '@/components/posts/body'
import Tags from '@/components/posts/tags'
import Meta from '@/components/posts/meta'
import Title from '@/components/posts/title'

const _PostWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
`

const Post = ({ post }) => (
  <>
    <Head>
      <title>{post.fields.title} &mdash; ʙ ʟ Λ ĸ ᴇ</title>
      <meta name="description" content={post.fields.description} />
    </Head>

    <_PostWrapper>
      <Meta publishDate={post.fields.publishDate} />
      <Title slug={post.fields.slug} title={post.fields.title} />
      <Body body={post.fields.body} />
      {post.fields.tags && <Tags tags={post.fields.tags} />}
    </_PostWrapper>
  </>
)

export async function getServerSideProps({ query }) {
  const _post = await getPost(query.slug)

  return {
    props: {
      post: _post.items[0],
    },
  }
}

export default Post
