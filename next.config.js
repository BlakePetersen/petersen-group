const { getPersons, getPosts } = require('./api/contentful');
const withManifest = require('next-manifest');
const withOffline = require('next-offline');

let _routes = {
		'/': { page: '/' }
	},
	_tags = [];

const _getPersons = async function () {
	return await getPersons();
};

const _getPosts = async function () {
	return await getPosts();
};

module.exports = withManifest(withOffline({
	exportPathMap: () => {
		return Promise.all([
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

				return _routes;
			});
	},
	webpack: function (config) {
		config.module.rules.push({
			test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
					name: '[name].[ext]'
				}
			}
		});

		return config
	},
	manifest: {
		output: './public/manifest',
		"name": "blakepetersen.io",
		"short_name": "blakepetersen.io",
		"start_url": "/",
		"display": "standalone",
		"background_color": "#111111",
		"theme_color": "#111111",
		icons: false
	},
	workboxOpts: {
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'offlineCache',
					expiration: {
						maxEntries: 200
					}
				}
			}
		]
	}
}));
