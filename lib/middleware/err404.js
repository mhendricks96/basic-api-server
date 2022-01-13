'use strict';

function err404(err, req, res, next) {
  if (err === 'Bad Route'){
    res.status(404).send('Bad Route');
  } else if (err === 'Bad Method') {
    res.status(404).send('Bad Method');
  } else {
    next('Server Error');
  }
}

module.exports = err404;