import { SanityClient } from 'artax-ui'

async function getPost(slug: string) {
  return await SanityClient.fetch(
    `
    *[_type == "post" && ${slug.toString()}.current == $slug][0]
  `,
  )
}

const Post = async ({ params }) => {
  const { slug = '' } = params
  const post = await getPost(slug)

  return (
    <article>
      <h1>{post?.current}</h1>
    </article>
  )
}

export default Post
