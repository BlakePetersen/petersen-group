/**
 * Custom Express server for NextJS
 * We need to use this for the Heroku SSL Redirect plugin injection as well as to power our local
 * API where we can request, handle and cache data to third parties completely server-side keeping
 * all of our API keys n such stashed away from prying eyes.
 */
const express = require('express');
const next = require('next');
const { parse } = require('url');

const { getRoutes } = require('./lib/routes');

const { isDev } = require('./helpers/util');
const app = next({ dev: isDev() });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/posts/:slug', async (req, res) => 	{
		app.render(req, res, `/post`, { slug : req.params.slug });
	});

	server.get('/tags/:tag', async (req, res) => {
		app.render(req, res, `/tag`, { tag : req.params.tag });
	});

	/**
	 * NextJS Fallback
	 * Here we check to see if we have an active route to work with, if we do, render the page.
	 * If not, let NextJS handle it (404, static file, etc). Routes are pulled from CMS
	 */
	server.get('*', async (req, res) => {
		const parsedUrl = parse(req.url, true);
		const { pathname } = parsedUrl;
		await getRoutes().then(routes => {
			const route = routes[pathname];
			if (route) {
				// We have a route defined for this -- Roll with it!
				return app.render(req, res, pathname, route);
			} else {
				// Catchall
				return handle(req, res);
			}
		})
	});

	server.listen(process.env.PORT || 3000, (err) => {
		if (err) throw err;
		console.log('> Ready on http://localhost:' + (process.env.PORT || 3000));
	});
});