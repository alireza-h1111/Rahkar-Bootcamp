const express = require('express');
const { showingUsersData, findingUserData , enteringData } = require('../cotrollers/user.controller');
const { enteringBookData } = require('../cotrollers/book.controler');

const router = express.Router()

// user routes
router.get('/showingUsers',showingUsersData );
router.get('/findingUserData/:id',findingUserData );
router.post('/enteringUserData',enteringData );

//book routes
router.post('/postBook',enteringBookData );

module.exports = router
