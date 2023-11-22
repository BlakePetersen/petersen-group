import { Frame } from '@/components/Frame'
import { SanityClient } from 'artax-ui'

// Data
async function getPost(slug: string): Promise<{
  title: string
  publishedAt: string
}> {
  return await SanityClient.fetch(
    `
    *[_type == "post" && slug.current == '${slug}'][0]
  `,
  )
}

// Component
const Post = async ({ params }) => {
  const { slug } = params
  const { title, publishedAt } = await getPost(slug)

  return (
    <Frame>
      <h1>{title}</h1>
      <div>{publishedAt}</div>
    </Frame>
  )
}

export default Post
