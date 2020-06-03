const routes = require('express').Router();
const apis = require('./apis');

routes.use('/', apis);

module.exports = routes;