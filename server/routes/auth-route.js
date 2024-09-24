const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');
const authenticate = require('../middleware/authenticate')

router.post('/user-register', controller.userRegister);
router.post('/user-login',controller.userLogin);
router.get('/validate-user',authenticate,controller.validateUser);

router.post('/add-room', controller.addNewRoom);
router.post('/create-guest',controller.checkin)
router.get('/get-allRooms',controller.getAllRoomsWithGuest)
router.post('/get-guest',controller.getGuestByRoom)

module.exports = router;