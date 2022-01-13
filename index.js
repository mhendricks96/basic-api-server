'use strict';

const { start } = require('./lib/server.js');
const { db } = require('./lib/models/recordModel');
const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));