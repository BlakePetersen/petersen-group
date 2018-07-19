import { getPerson } from '../api/contentful'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ query }) {
    const _person = await getPerson(query.slug);
    return {
      person: _person.items[0],
    }
  }

  render() {
    return <>
      <h1>About { this.props.person.fields.name }</h1>
      <h2>
        Github: { this.props.person.fields.github }<br />
        Twitter: @{ this.props.person.fields.twitter }
      </h2>
      <p>{ this.props.person.fields.shortBio }</p>
    </>
  }
};

export default About
