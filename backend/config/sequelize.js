const path = require('path');

module.exports = {
  config: path.join('config'),
  'migrations-path': path.normalize('./database/migrations'),
  'seeders-path': path.normalize('./database/seeders'),
  'models-path': path.normalize('./database/models')
};