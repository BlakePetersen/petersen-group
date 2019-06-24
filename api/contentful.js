const contentful = require('contentful');
const env = require('../config/development.json');
// const nconf = require('../config/nconf');

const client = contentful.createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken: env.CONTENTFUL_ACCESS_TOKEN
});

const getBlake = () =>
	client.getEntries({
		'content_type': 'person',
		'fields.slug': 'blake-petersen'
	});

const getPersons = () =>
	client.getEntries({
		'content_type': 'person',
	});

const getPerson = (slug) =>
	client.getEntries({
		'content_type': 'person',
		'fields.slug': slug
	});

const getPosts = () =>
	client.getEntries({
		'content_type': 'blogPost'
	});

const getPost = (slug) =>
	client.getEntries({
		'content_type': 'blogPost',
		'fields.slug': slug
	});

const getPostsByTag = (tag) =>
	client.getEntries({
		'content_type': 'blogPost',
		'fields.tags': tag
	});

module.exports = {
	getBlake,
	getPerson,
	getPersons,
	getPost,
	getPosts,
	getPostsByTag
};
