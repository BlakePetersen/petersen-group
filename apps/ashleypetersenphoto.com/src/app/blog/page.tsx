import { Page, SanityClient } from 'artax-ui'
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
    <Page
      title={`Conceptual Portraiture, Underwater Photography`}
      description={`Ashley Petersen Photography`}
    >
      {posts &&
        posts.map((post, i) => {
          return (
            <div key={i}>
              <Link href={`/blog/${post.slug.current}`}>
                <h1>{post.title}</h1>
              </Link>
            </div>
          )
        })}
    </Page>
  )
}

export default BlogRoot
