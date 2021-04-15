const express = require('express');

const userController = require('../controllers/userController');
const userMiddleware = require('../middleware/userMiddleware');

const router = express.Router();

router.post('/login', userMiddleware.validateUser, userController.loginUser);
router.post('/register', userController.registerUser);
router.put('/profile', userController.updateUser);

module.exports = router;
