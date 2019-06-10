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
const app = next(isDev());
const handle = app.getRequestHandler();

app.prepare().then(() => {
	// TODO(Blake): Nest data vs. page endpoints for more clear separation
	const server = express();

//    /**
//     * Data endpoints.
//     */
//    server.get('/_data/event', async (req, res) => {
//       const event = await contentful.getEvent();
//       res.json(event);
//    });

//    server.get('/_data/events', async (req, res) => {
//       const events = await contentful.getEvents();
//       res.json(events);
//    });

//    server.get('/_data/global/:name', async (req, res) => {
//       const global = await contentful.getGlobal(req.params.name);
//       res.json(global);
//    });

//    server.get('/_data/globals', async (req, res) => {
//       const globals = await contentful.getGlobals();
//       res.json(globals);
//    });

//    server.get('/_data/page/:path(*)', async (req, res) => {
//       const page = await contentful.getPage(req.params.path);
//       res.json(page);
//    });

//    server.get('/_data/session/:id', async (req, res) => {
//       const session = await contentful.getSession(req.params.id);
//       res.json(session);
//    });

//    server.get('/_data/sessions/:year(2016|2017)/:location', async (req, res) => {
//       const sessions = await contentful.getSessionsByEvent(req.params.year, req.params.location);
//       res.json(sessions);
//    });

//    server.get('/_data/sessions', async (req, res) => {
//       const sessions = await contentful.getSessions();
//       res.json(sessions);
//    });

//    // TODO(Blake): Don't 301 our data endpoints yet, we need to keep it accessible on non-SSL localhost for now
//    // server.use(httpsRedirect(['production'], 301));
//
//    server.get('/posts/:slug', async (req, res) => {
//       const _slug = req.params.slug;
//       app.render(req, res, `/post`, { slug: _slug });
//    });

//    /**
//     * Redirects
//     */
//    server.get('/:year(2016|2017)/:location/sessions', (req, res) => {
//       return res.redirect(`/${req.params.year}/${req.params.location}`);
//    });

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