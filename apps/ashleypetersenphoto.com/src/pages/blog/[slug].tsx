import { SanityClient } from 'artax-ui/SanityClient'

const Post = ({ post }) => {
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await SanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  )

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params
  const post = await SanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug },
  )
  return {
    props: {
      post,
    },
  }
}

export default Post
