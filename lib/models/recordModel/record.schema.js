'use strict';

const Record = (sequelize, DataTypes) => sequelize.define('Record', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artist: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Record;