const express = require('express');

const comicsController = require('../controllers/comicControllers');

const router = express.Router();

router.post('/comics', comicsController.favoriteComics);
router.get('/favorites/comics', comicsController.getAllComics);

module.exports = router;
