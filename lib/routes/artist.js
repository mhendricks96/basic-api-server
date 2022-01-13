'use strict';

const express = require('express');
const { ArtistModel } = require('../models/recordModel');
const createArtist = require('../middleware/createArtist.js');
const updateArtist = require('../middleware/updateartist.js');
const removeArtist = require('../middleware/removeArtist.js');
const artistRouter = express.Router();

artistRouter.get('/artist', read);
artistRouter.get('/artist/:id', read);
artistRouter.post('/artist', createArtist);
artistRouter.put('/artist/:id', updateArtist);
artistRouter.delete('/artist/:id', removeArtist);

async function read(req, res, next){
  console.log('from records');

  let id = req.params.id;
  let artists;

  if (id){
    artists = await ArtistModel.findOne({where: {id:id}});
  } else {
    artists = await ArtistModel.findAll();
  }

  let resObject = {
    count: artists ? artists.length: 1,
    results: artists,
  };
  res.status(200).json(resObject);
}

module.exports = artistRouter;