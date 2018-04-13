const contentful = require('contentful');
const env = require('../env-config');

const client = contentful.createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN
});

function getBlake() {
  const entry = client.getEntries({
    'content_type': 'person',
    'fields.slug': 'blake-petersen'
  });
  return entry;
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
  getPost,
  getPosts
};
