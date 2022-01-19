import { getPerson } from '@/pages/api/contentful'

const About = ({ person }) => (
  <>
    <h1>About {person.fields.name}</h1>
    <h2>
      Github: {person.fields.github}
      <br />
      Twitter: @{person.fields.twitter}
    </h2>
    <p>{person.fields.shortBio}</p>
  </>
)

About.getInitialProps = async ({ query }) => {
  const _person = await getPerson(query.slug)
  return {
    person: _person.items[0],
  }
}

export default About
