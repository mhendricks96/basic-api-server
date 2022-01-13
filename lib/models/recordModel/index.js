'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const recordSchema = require('./record.schema.js');
const artistSchema = require('./artist.schema.js');

//singleton for sequelize with url passed in
let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
//dialectOptions above are for Heroku deployment

const RecordModel = recordSchema(db, DataTypes);
const ArtistModel = artistSchema(db, DataTypes);

module.exports = {
  db,
  RecordModel,
  ArtistModel,
};