import sortBy from 'sort-by'

import { getPosts } from '@/pages/api/contentful'

import PostPreview from '@/components/primitives/post-preview'
import Hr from '@/components/primitives/hr'
import Grid from '@/components/primitives/grid'

const Index = ({ posts }) => (
  <Grid>
    {posts.map((post, index) => (
      <div key={index}>
        <PostPreview post={post} />
        {index !== posts.length - 1 && <Hr />}
      </div>
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
