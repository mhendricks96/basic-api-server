'use strict';

const express = require('express');
const { ArtistModel } = require('../models/recordModel');
const createArtist = require('../middleware/createArtist.js');
const updateArtist = require('../middleware/updateartist.js');
const removeArtist = require('../middleware/removeArtist.js');
const router = express.Router();

router.get('/artist', read);
router.get('/artist/:id', read);
router.post('/artist', createArtist);
router.put('/artist/:id', updateArtist);
router.delete('/artist/:id', removeArtist);

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

module.exports = router;