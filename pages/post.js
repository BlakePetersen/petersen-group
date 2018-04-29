import { initStore, setPageAsPost , setPageTitle} from '../store'
import withRedux from '../lib/withRedux'

import { getBlake, getPost } from '../api/posts'

import Layout from '../components/layout/Layout'

import Markdown from 'react-markdown'
import Moment from 'react-moment'
import 'prismjs';
import prismTheme from '../static/prism-duotone-sea.css';
import loadLanguages from 'prismjs/components/index';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import { DiscussionEmbed, CommentCount } from 'disqus-react';

import styled from 'styled-components'
import { bindActionCreators } from "redux";

const _Title = styled.h1`
  color: #435469;
`;

const _Meta = styled.h3`
  color: transparentize(#435469, .75);
`;

const _Tags = styled.div`
  color: transparentize(#435469, .75);
`;

class Post extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.setPageAsPost();
    this.props.setPageTitle(this.props.post.fields.title);

    this.disqusShortname = 'BlakePetersen';

    this.disqusConfig = {
      url: "/" + this.props.post.fields.slug + "/",
      identifier: "17"
    };
  }

  componentDidMount() {
    // load Prismjs
    loadLanguages(['apacheconf','bash','php','python']);
    const _codeBlocks = document.querySelectorAll('pre');
    _codeBlocks.forEach((codeBlock) => {
      codeBlock.classList.add('line-numbers')
    });
    Prism.highlightAll()
  }

  static async getInitialProps({ query }) {
    let _posts = await getPost(query.slug);
    const _author = await getBlake();
    return {
      post: _posts.items[0],
      author: _author.items[0],
    }
  }

  render() {
    return <Layout>
      <style>
        { prismTheme }
      </style>
      <_Title>{ this.props.post.fields.title }</_Title>
      <_Meta>By { this.props.author.fields.name } on <Moment format={ `MMMM Do, YYYY` }>{ this.props.post.fields.publishDate }</Moment></_Meta>
      <CommentCount shortname={this.disqusShortname} config={this.disqusConfig}>
        Comments
      </CommentCount>
      <_Tags>TAAAAAGGGGGSSSSSS</_Tags>
      <Markdown source={ this.props.post.fields.body } />
      <DiscussionEmbed shortname={this.disqusShortname} config={this.disqusConfig} />
    </Layout>
  }
};

const mapStateToProps = ({ isPost, pageTitle }) => ({ isPost, pageTitle });

const mapDispatchToProps = (dispatch) => {
  return {
    setPageTitle: bindActionCreators(setPageTitle, dispatch),
    setPageAsPost: bindActionCreators(setPageAsPost, dispatch),
  }
};

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Post)
