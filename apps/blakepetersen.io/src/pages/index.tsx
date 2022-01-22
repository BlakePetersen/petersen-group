import sortBy from 'sort-by'

import { getPosts } from '@/pages/api/contentful'

import PostPreview from '@/components/primitives/post-preview'
import Grid from '@/components/primitives/grid'

const Index = ({ posts }) => (
  <Grid>
    {posts.map((post, index) => (
      <PostPreview post={post} key={index} />
    ))}
  </Grid>
)

export async function getServerSideProps() {
  const _posts = await getPosts()
  _posts.items = _posts.items.sort(sortBy('-fields.publishDate'))

  return {
    props: {
      posts: _posts.items,
    },
  }
}

export default Index
