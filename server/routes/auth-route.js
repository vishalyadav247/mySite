const express = require('express');
const router = express.Router();
const userRegister = require('../controllers/auth-controller')

router.post('/user-register', userRegister)

module.exports = router;