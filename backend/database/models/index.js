'use strict';

const Sequelize = require('sequelize');
const config = require('../../config');
const db = {};

let sequelize = new Sequelize(
  config.DB_DATABASE,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    'host': config.DB_HOST,
    'dialect': 'mysql'
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.SUBSCRIPTION_TB = require('./SUBSCRIPTION_TB')(sequelize, Sequelize);
db.TEMPLATE_TB = require('./TEMPLATE_TB')(sequelize, Sequelize);
db.USER_PUSH_LIST_TB = require('./USER_PUSH_LIST_TB')(sequelize, Sequelize);

db.SUBSCRIPTION_TB.hasMany(db.USER_PUSH_LIST_TB, {as : 'subscriptions', foreignKey: 'subscription_id'});
db.TEMPLATE_TB.hasMany(db.USER_PUSH_LIST_TB, {as : 'templates', foreignKey: 'template_id'});

module.exports = db;
