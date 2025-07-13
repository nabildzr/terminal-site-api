const express = require('express');
const { register, login,  googleCallback, googleAuth } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);

module.exports = router;