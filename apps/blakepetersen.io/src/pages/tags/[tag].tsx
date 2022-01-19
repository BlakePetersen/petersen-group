import sortBy from 'sort-by'
import styled from 'styled-components'
import Head from 'next/head'

import { getPostsByTag } from '@/pages/api/contentful'

import PostPreview from '@/components/primitives/post-preview'
import Grid from '@/components/primitives/grid'
import Hr from '@/components/primitives/hr'

import Colors from '@/styles/colors'

const _Title = styled.h2`
  font-weight: normal;
  justify-self: center;
  padding: 1.5rem;
  letter-spacing: 0.33em;
  text-transform: uppercase;
  border-bottom: 1px solid ${Colors.concrete};
`

const Tag = ({ posts, tag }) => (
  <>
    <Head>
      <title>{tag} posts &mdash; ʙ ʟ Λ ĸ ᴇ</title>
    </Head>

    <Grid>
      <_Title>{tag}</_Title>

      <Grid>
        {posts &&
          posts.map((post, index) => (
            <div key={index}>
              <PostPreview post={post} />
              {index !== posts.length - 1 && <Hr />}
            </div>
          ))}
      </Grid>
    </Grid>
  </>
)

export async function getServerSideProps({ query }) {
  const _tag = query.tag
  const _posts = await getPostsByTag(_tag)
  _posts.items = _posts.items.sort(sortBy('-fields.publishDate'))

  return {
    props: {
      posts: _posts.items,
      tag: _tag,
    },
  }
}

export default Tag
