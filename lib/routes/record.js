'use strict';

const express = require('express');
const { db, RecordModel, ArtistModel } = require('../models/recordModel');
const createRecord = require('../middleware/createrecord.js');
//const saveRecord = require('../middleware/saverecord.js');
//const db = require('../models/recordModel');
const router = express.Router();

router.get('/record', read);
router.get('/record/:id', read);
router.post('/record', createRecord);
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