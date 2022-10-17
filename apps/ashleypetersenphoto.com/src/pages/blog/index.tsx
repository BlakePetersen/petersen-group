import {ArtaxLink, Page, SanityClient} from 'artax-ui'
import useSWR from "swr";
import groq from 'groq'
import { NextPage } from 'next/types';

const BlogRoot: NextPage = () => {
  const blogQuery = `*[_type=="post"]`

  const {data: posts} = useSWR(
      groq`${blogQuery}`,
      query => SanityClient.fetch(query),
  )

  return (
      <Page
          title={`Conceptual Portraiture, Underwater Photography`}
          description={`Ashley Petersen Photography`}
      >
        {posts && posts.map((post, i) => {
            return (
                <div key={i}>
                  <ArtaxLink href={`/blog/${post.slug.current}`}><h1>{post.title}</h1></ArtaxLink>
                </div>
            )
        })}
    </Page>
  )
}

export default BlogRoot
