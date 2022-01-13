'use strict';
const { RecordModel } = require('../models/recordModel');

async function removeRecord(req, res){
  let id = req.params.id;
  //let recordToDestroy;

  if(id) {
    await RecordModel.destroy({where: {id: id}});
  }
  res.status(200).send(await RecordModel.findOne({where: {id:id}})||'your record was deleted successfully'); 
}

module.exports = removeRecord;