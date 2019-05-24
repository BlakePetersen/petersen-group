const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { getPersons, getPosts } = require('./api/contentful');
const withCSS = require('@zeit/next-css');

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

module.exports = withCSS({
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

          console.log('tags', post.fields.tags);

          post.fields.tags && post.fields.tags.forEach((tag) => {
            if (_tags.includes(tag)) {
              _tags.push(tag)
            }
          });

          _routes['/posts/' + post.fields.slug] = {
            page: '/post',
            query: { slug: post.fields.slug }
          }
        });

        _tags.forEach((tag) => {
          _routes['/tag/' + tag] = {
            page: '/tag',
            query: { tag: tag }
          }
        });

        console.log(_routes);

        return _routes;
      });
  },
  webpack: (config, options) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    );

    return config
  }
});
