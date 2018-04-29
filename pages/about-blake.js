import { initStore } from '../store'
import withRedux from '../lib/withRedux'

import Layout from '../components/layout/Layout'
import { getBlake } from '../api/posts'

const aboutBlake = (props) => (
  <Layout>
    <h1>About { props.blake.fields.name }</h1>
    <h2>
      Github: { props.blake.fields.github }<br />
      Twitter: @{ props.blake.fields.twitter }
    </h2>
    <p>{ props.blake.fields.shortBio }</p>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
);

aboutBlake.getInitialProps = async () => {
  const _blake = await getBlake();
  return { blake: _blake.items[0] }
};

export default withRedux(initStore, null, null)(aboutBlake)
