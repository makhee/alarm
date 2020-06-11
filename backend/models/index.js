'use strict';

const Sequelize = require('sequelize');
const config = require('../config');
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

module.exports = db;
