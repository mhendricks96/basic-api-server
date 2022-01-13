'use strict';

const Artist = (sequelize, DataTypes) => sequelize.define('Artist', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

module.exports = Artist;