const nconf = require('nconf')
	.argv().env()
	.file('config', `./config/${process.env.NODE_ENV}.json`);

global.nconf = nconf;

module.exports = nconf;
