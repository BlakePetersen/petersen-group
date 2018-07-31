const { getPersons, getPosts } = require('./api/contentful');
const withCSS = require('@zeit/next-css');
const images = require('remark-images');
const emoji = require('remark-emoji');
const highlight = require('remark-highlight.js');

let _routes = {
  '/': { page: '/' }
};

const _getPersons = async function () {
  return await getPersons();
};

const _getPosts = async function () {
  return await getPosts();
};

module.exports = withCSS({
  cssModules: true,
  exportPathMap: function () {
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
          _routes['/posts/' + post.fields.slug] = {
            page: '/post',
            query: { slug: post.fields.slug }
          }
        });

        console.log(_routes);

        return _routes;
      });
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji, highlight]
          }
        }
      ]
    });

    return config
  }
});
