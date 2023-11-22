import { Frame } from '@/components/Frame'
import { SanityClient } from 'artax-ui'
import Link from 'next/link'

async function getPosts() {
  return await SanityClient.fetch(
    `
    *[_type == "post"]
  `,
  )
}

const BlogRoot = async () => {
  const posts = await getPosts()

  return (
    <Frame>
      {posts
        ? posts.map(({ title, slug }, i) => {
            return (
              <div key={i}>
                <Link href={`/blog/${slug.current}`}>
                  <h1>{title}</h1>
                </Link>
              </div>
            )
          })
        : null}
    </Frame>
  )
}

export default BlogRoot
