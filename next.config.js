const withManifest = require('next-manifest');
const withOffline = require('next-offline');

const nconf = require('./config/nconf');
const { getRoutes } = require('./lib/routes');

module.exports = withManifest(withOffline({
	exportPathMap: getRoutes,
	env: {
		CONTENTFUL_SPACE_ID: nconf.get('CONTENTFUL_SPACE_ID'),
		CONTENTFUL_ACCESS_TOKEN: nconf.get('CONTENTFUL_ACCESS_TOKEN'),
		CONTENTFUL_MANAGEMENT_TOKEN: nconf.get('CONTENTFUL_MANAGEMENT_TOKEN'),
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
					{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
				]
			}
		]
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
