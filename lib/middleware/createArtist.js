'use strict';

const { ArtistModel } = require('../models/recordModel');

async function createArtist(req, res){
  let { name, genre } = req.query;

  const artist = await ArtistModel.create({
    name: name,
    genre: genre,
  });
  
  res.send(artist);
}

module.exports = createArtist;