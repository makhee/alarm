const routes = require('express').Router();
const apis = require('./apis');

routes.use('/api', apis);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;