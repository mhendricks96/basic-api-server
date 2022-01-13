'use strict';

const express = require('express');
const { RecordModel } = require('../models/recordModel');

const router = express.Router();

router.get('/record', read);
router.get('/record/:id', read);
// router.post('/record', create);
// router.put('/record/:id', update);
// router.delete('/record/:id', remove);

async function read(req, res, next){
  console.log('from records');

  let id = req.params.id;
  let records;

  if (id){
    records = await RecordModel.findOne({where: {id:id}});
  } else {
    records = await RecordModel.findAll();
  }

  let resObject = {
    count: records? records.length: 1,
    results: records,
  };
  res.status(200).json(resObject);
}

module.exports = router;