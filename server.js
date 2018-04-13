const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3000 : 8000;
const app = next({dev});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/blog/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log('http://localhost:' + port)
    });
  })
  .catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });
