'use strict';
const { ArtistModel } = require('../models/recordModel');

async function updateArtist(req, res){
  let { name, genre } = req.query;
  let id = req.params.id;

  if (id) {
    await ArtistModel.update({
      name: name,
      genre: genre,
    },{
      where: {id: id},
    });
  }else{
    await ArtistModel.create({
      name: name,
      genre: genre,
    });
  }

  res.status(200).send(await ArtistModel.findOne({where: {id: id}}));
}

module.exports = updateArtist;