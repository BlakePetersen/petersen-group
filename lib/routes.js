/**
 * Routes
 */

const { getPersons, getPosts } = require('../api/contentful');

let _routes = {
		'/': {

			page: '/',
		}
	},
	_tags = [];


const _getPersons = async () => {
	return await getPersons();
};

const _getPosts = async () => {
	return await getPosts();
};

const getRoutes = async () => {
	return await Promise.all([
		_getPersons(),
		_getPosts()
	])
		.then(data => {

			data[0].items.forEach((person) => {
				_routes['/about/' + person.fields.slug] = {
					page: '/about',
					query: { slug: person.fields.slug },
				}
			});

			data[1].items.forEach((post) => {

				post.fields.tags && post.fields.tags.forEach((tag) => {
					if (!_tags.includes(tag)) {
						_tags.push(tag)
					}
				});

				_routes['/posts/' + post.fields.slug] = {
					page: '/post',
					query: { slug: post.fields.slug }
				}
			});

			_tags.forEach((tag) => {
				_routes['/tags/' + tag] = {
					page: '/tag',
					query: { tag: tag }
				}
			});

			console.log(_routes);

			return _routes;
		}).catch(error => {
			console.log('error', error)
		})
};

module.exports = {
	getRoutes
};
