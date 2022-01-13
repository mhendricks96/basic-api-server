'use strict';

//these 2 always
const express = require('express');
const app = express();
const artistRoutes = require('./routes/artist.js');
const recordRoutes = require('./routes/record.js');

const logger = require('./middleware/logger.js');
//const validator = require('./middleware/validator.js');
const err404 = require('./middleware/err404.js');
const err500 = require('./middleware/err500.js');


app.use(logger);
//app.use(validator);
app.use(express.json());
//app.use(artistRoutes);
app.use(recordRoutes);

// This is where all of out POST, GET, etc functions would be. Instead they are in the routers above.

//error handlers
app.use(err500);
app.use(err404);


module.exports = {
  start:(port) => {
    app.listen(port, () => {
      console.log('hi, michael. your server is running');
    });
  },
  app,
};



