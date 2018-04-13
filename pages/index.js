import Link from 'next/link'

import { initStore } from '../store'
import withRedux from '../utils/withRedux'

import Layout from '../components/Layout'
import { getPosts } from '../api/posts'
import styled from 'styled-components'

const _ListWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid #e5e8e9;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  } 
`;

const _Title = styled.h1`
  color: #84B0C8;
  line-height: 
`;

const Index = (props) => (
  <Layout>
    { props.posts.items.map((item) => (
      <_ListWrapper>
        <Link key={item.fields.slug} href={`/blog/${item.fields.slug}`}>
          <a>
            <_Title>{ item.fields.title }</_Title>
          </a>
        </Link>
      </_ListWrapper>
    ))}
  </Layout>
);

Index.getInitialProps = async () => {
  const _posts = await getPosts();
  return { posts: _posts }
};

export default withRedux(initStore, null, null)(Index)
