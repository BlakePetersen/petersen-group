// State
import { initStore, clearPageAsPost } from '../store'
import { bindActionCreators } from "redux";
import withRedux from '../lib/withRedux'

// Content
import { getPosts, getBlake } from '../api/posts'

// Layout
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Moment from 'react-moment'
import sortBy from 'sort-by';

// Styled Components
import styled from 'styled-components'

const _ListWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid #e5e8e9;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  } 
`;

const _TitleLink = styled.a`
  color: #435469;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: #435469 0 solid;
  transition: border-width 150ms ease 50ms, transform 250ms ease;

  &:hover {
    transform: translateY(-4px);
    border-width: 2px;
  } 
`;

const _Meta = styled.h3`
  color: transparentize(#435469, .75);
`;

const _Description = styled.p`
  line-height: 1.4;
`;

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.clearPageAsPost();
    this.props.posts.items = this.props.posts.items.sort(sortBy('-fields.publishDate'));
  }

  static async getInitialProps() {
    const _posts = await getPosts();
    const _author = await getBlake();
    return {
      posts: _posts,
      author: _author.items[0]
    }
  };

  render() {
    return <Layout>
      { this.props.posts.items.map((item) => (
        <_ListWrapper>
          <Link key={ item.fields.slug } href={`/${ item.fields.slug }`}>
            <h1>
              <_TitleLink>{ item.fields.title }</_TitleLink>
            </h1>
          </Link>
          <_Meta>
            <Moment format={ `MMMM Do, YYYY` }>{ item.fields.publishDate }</Moment> / Tags
          </_Meta>
          <_Description>
            { item.fields.description }
          </_Description>
        </_ListWrapper>
      ))}
    </Layout>
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearPageAsPost: bindActionCreators(clearPageAsPost, dispatch),
  }
};

export default withRedux(initStore, null, mapDispatchToProps)(Index)
