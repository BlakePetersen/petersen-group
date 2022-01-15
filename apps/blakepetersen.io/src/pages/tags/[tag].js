import sortBy from 'sort-by'
import styled from 'styled-components'
import Head from 'next/head'

import { getPostsByTag } from '../api/contentful'

import PostPreview from '../../components/layout/PostPreview'
import Grid from '../../components/layout/Grid'
import Hr from '../../components/layout/Hr'

import Colors from '../../styles/colors'

const _Title = styled.h2`
  font-weight: normal;
  justify-self: center;
  padding: 1.5rem;
  letter-spacing: 0.33em;
  text-transform: uppercase;
  border-bottom: 1px solid ${Colors.concrete};
`

const Tag = ({ items, tag }) => (
  <>
    <Head>
      <title>{tag} posts &mdash; ʙ ʟ Λ ĸ ᴇ</title>
    </Head>

    <Grid>
      <_Title>{tag}</_Title>

      <Grid>
        {items &&
          items.map((item, index) => (
            <div key={index}>
              <PostPreview item={item} />
              {index !== items.length - 1 && <Hr />}
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
      items: _posts.items,
      tag: _tag,
    },
  }
}

export default Tag
