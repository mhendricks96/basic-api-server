'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory:';

const artistSchema = require('./artist.schema.js');

let db = new Sequelize(POSTGRES_URI);

const ArtistModel = artistSchema(db, DataTypes);

module.exports = {
  db,
  ArtistModel,
};