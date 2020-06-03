const path = require('path');

module.exports = {
  config: path.resolve('config', 'db.js'),
  'migrations-path': path.join('migrations'),
  'seeders-path': path.join('seeders'),
  'models-path': path.join('models')
};