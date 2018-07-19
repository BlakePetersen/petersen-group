import { getPost } from '../api/contentful'
import Markdown from 'react-markdown'
import { DiscussionEmbed, CommentCount } from 'disqus-react';

import Meta from '../components/posts/meta'

import styled from 'styled-components'

const _Title = styled.h1`
  color: #435469;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  disqusShortname = 'blakepetersen';
  disqusConfig = {
    url: "/" + this.props.post.fields.slug + "/",
    identifier: this.props.post.fields.disqusId || false
  };

  componentDidMount() {
    const _codeBlocks = document.querySelectorAll('pre');
    _codeBlocks.forEach((codeBlock) => {
      codeBlock.classList.add('line-numbers')
    });
    // Prism.highlightAll()
  }

  static async getInitialProps({ query }) {
    const _post = await getPost(query.slug);
    return {
      post: _post.items[0]
    }
  }

  render() {
    return <>
      <_Title>{ this.props.post.fields.title }</_Title>

      <Meta publishDate={ this.props.post.fields.publishDate } />

      <Markdown source={ this.props.post.fields.body } />

      { this.props.post.fields.disqusId &&
        <DiscussionEmbed shortname={this.disqusShortname} config={this.disqusConfig}/>
      }
    </>
  }
};

export default Post
