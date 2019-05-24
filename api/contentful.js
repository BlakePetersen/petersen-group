const contentful = require('contentful');
const env = require('../env-config');

const client = contentful.createClient({
  space: env.CONTENTFUL.SPACE_ID,
  accessToken: env.CONTENTFUL.ACCESS_TOKEN
});

const getBlake = () => {
  const entry = client.getEntries({
    'content_type': 'person',
    'fields.slug': 'blake-petersen'
  });

  return entry;
};

const getPersons = () => {
  const people = client.getEntries({
    'content_type': 'person',
  });

  return people;
};

const getPerson = (slug) => {
  const person = client.getEntries({
    'content_type': 'person',
    'fields.slug': slug
  });

  return person;
};

const getPosts = () => {
  const entries = client.getEntries({
    'content_type': 'blogPost'
  });

  return entries;
};

const getPost = (slug) => {
  const entry = client.getEntries({
    'content_type': 'blogPost',
    'fields.slug': slug
  });

  return entry;
};

const getPostsByTag = (tag) => {
  const entries = client.getEntries({
    'content_type': 'blogPost',
    'fields.tags': tag
  });

  return entries;
};

module.exports = {
  getBlake,
  getPerson,
  getPersons,
  getPost,
  getPosts,
  getPostsByTag
};
