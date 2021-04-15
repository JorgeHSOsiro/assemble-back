const express = require('express');

const characterController = require('../controllers/charactersController');

const router = express.Router();

router.post('/character', characterController.favoriteChar);
router.get('/favorites/characters', characterController.getAllCharacters);

module.exports = router;
