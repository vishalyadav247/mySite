const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');
const authenticate = require('../middleware/authenticate')

router.post('/user-register', controller.userRegister);
router.post('/user-login',controller.userLogin);
router.get('/validate-user',authenticate,controller.validateUser)

module.exports = router;