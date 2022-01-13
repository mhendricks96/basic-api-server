'use strict';
const Record = require('../models/recordModel');


async function saveRecord(req, res){
  console.log('any data in the request', req.record);
  let {  title, artist, year } = req.query;
  Record.build({
    title: title,
    artist: artist,
    year: year,
  });
}

module.exports = saveRecord;