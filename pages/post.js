import { initStore } from '../store'
import withRedux from '../utils/withRedux'

import Layout from '../components/Layout'
import Markdown from 'react-markdown'
import { getPost } from '../api/posts'

const post = (props) =>
  <Layout>
    <h1>{props.post.fields.title}</h1>
    <div className="markdown">
      <Markdown source={props.post.fields.body} />
    </div>
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
</Layout>

post.getInitialProps = async function ({ query }) {
  const res = await getPost(query.slug);
  return { post: res.items[0] }
};

export default withRedux(initStore, null, null)(post)
