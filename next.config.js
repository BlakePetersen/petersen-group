const { getPosts } = require('./api/posts');

let _routes = {
  '/': { page: '/' },
  '/about-blake': { page: '/about' },
  '/blake-petersen': { page: '/about' },
  '/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
  '/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
  '/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
  '/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
};

const _getPosts = async function () {
  return await getPosts();
};

// _getPosts().then((posts) => {
//   posts.posts.items.forEach((post) => {
//     _routes[post.fields.slug] = { page: '/post', query: { title: post.fields.title } }
//   })
//
//   console.log(_routes);
// });


module.exports = {
  exportPathMap: async function () {

    const _posts = await _getPosts();

    _posts
      .then((posts) => {
        posts.items.forEach((post) => {
          _routes[post.fields.slug] = { page: '/post', query: { title: post.fields.title } }
        });

        console.log(_routes);


      });

    return _routes;
  }
}