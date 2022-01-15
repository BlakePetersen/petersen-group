import styled from 'styled-components'
import Head from 'next/head'

import { getPost } from '../../api/contentful'

import Body from '../../components/posts/Body'
import Tags from '../../components/posts/Tags'
import Meta from '../../components/posts/Meta'
import Title from '../../components/posts/Title'

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

export async function getServerSideProps({ slug }) {
    const _post = await getPost(slug)

    return {
        props: {
            post: _post.items[0],
        }
    }
}

export default Post