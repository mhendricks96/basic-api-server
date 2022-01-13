'use strict';
const { RecordModel } = require('../models/recordModel');

async function updateRecord(req, res){
  let { title, artist, year} = req.query;
  let id = req.params.id;
  
  if (id){
    
    await RecordModel.update({
      title: title,
      artist: artist,
      year: year,
    },{
      where: {id: id},
    });
  }else{
    await RecordModel.create({
      title: title,
      artist: artist,
      year: year,
    });
  }


  res.status(200).send(await RecordModel.findOne({where: {id:id}}));
}

module.exports = updateRecord;