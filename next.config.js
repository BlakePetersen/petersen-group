const { getPosts } = require('./api/posts');
const withCSS = require('@zeit/next-css');


let _routes = {
  '/': { page: '/' },
  '/about-blake': { page: '/about-blake' },
  '/blake-petersen': { page: '/about-blake' },
  // '/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
  // '/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
  // '/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
  // '/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
};

const _getPosts = async function () {
  return await getPosts();
};

module.exports = withCSS({
  cssModules: true,
  exportPathMap: function () {
    return Promise.all([
      _getPosts()
    ])
      .then((posts) => {
        posts[0].items.forEach((post) => {
          _routes['/' + post.fields.slug] = { page: '/post', query: { title: post.fields.title } }
        });
        return _routes;
      });
  }
});
