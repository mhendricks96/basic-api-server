'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory:';

const recordSchema = require('./record.schema.js');

//singleton for sequelize with url passed in
let db = new Sequelize(POSTGRES_URI);

const RecordModel = recordSchema(db, DataTypes);

module.exports = {
  db,
  RecordModel,
};