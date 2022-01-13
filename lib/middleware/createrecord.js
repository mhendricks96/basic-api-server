'use strict';
const { RecordModel } = require('../models/recordModel');


async function createRecord(req, res){
  let {  title, artist, year } = req.query;
  
  const record = await RecordModel.create({
    title: title,
    artist: artist,
    year: year,
  });
  
  res.send(record);
}


module.exports = createRecord;

