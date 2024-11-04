const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');
const authenticate = require('../middleware/authenticate')

router.post('/user-register', controller.userRegister);
router.post('/user-login',controller.userLogin);
router.get('/validate-user',authenticate,controller.validateUser);
router.post('/logout',authenticate,controller.logoutUser);

router.post('/add-room', controller.addNewRoom);
router.post('/create-guest',controller.checkin);
router.put('/guest-checkout',controller.checkout)
router.get('/all-rooms',controller.getAllRooms);
router.post('/get-guest',controller.getGuestByRoom);
router.get('/all-guests',controller.getAllGuests);
router.put('/pay-rent',controller.payRent);
router.put('/pay-electricity',controller.payElectricity);

module.exports = router;