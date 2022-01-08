const contentful = require('contentful');
// const env = require('../env-config');

// const client = contentful.createClient({
//   space: env.CONTENTFUL.SPACE_ID,
//   accessToken: env.CONTENTFUL.ACCESS_TOKEN
// });

function getHandle() {
  const entry = client.getEntries({
    'content_type': 'person',
    'fields.slug': 'blake-petersen'
  });
  return entry;
};

function getPersons() {
  const people = client.getEntries({
    'content_type': 'person',
  });
  return people;
};

function getPerson(slug) {
  const person = client.getEntries({
    'content_type': 'person',
    'fields.slug': slug
  });
  return person;
};

function getPosts() {
  const entries = client.getEntries({
      'content_type': 'blogPost'
    });
  return entries;
};

function getPost(slug) {
  const entry = client.getEntries({
    'content_type': 'blogPost',
    'fields.slug': slug
  });
  return entry;
};

module.exports = {
  getBlake,
  getPerson,
  getPersons,
  getPost,
  getPosts
};
