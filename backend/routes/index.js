const routes = require('express').Router();
const api = require('./api');
const auth = require('./auth');
const js = require('./js');

routes.use('/api', api);
routes.use('/auth', auth);
routes.use('/js', js);

module.exports = routes;