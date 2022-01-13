'use strict';

function err500(err, req, res, next){
  console.log('Catch-all error');
  console.log(err);
  res.status(500).send('Server Error');
}

module.exports = err500;