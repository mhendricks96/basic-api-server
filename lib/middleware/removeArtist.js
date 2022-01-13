'use strict';
const { ArtistModel } = require('../models/recordModel');

async function removeArtist(req, res){
  let id = req.params.id;

  if (id) {
    await ArtistModel.destroy({where: {id: id}});
  }

  res.status(200).send(await ArtistModel.findOne({where: {id:id}}))||'your artist has been deleted';
}

module.exports = removeArtist;