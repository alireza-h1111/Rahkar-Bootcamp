const express = require('express');
const router = express.Router();
const nameAndNumber = require('../controlers/getUserNameAndRnumbers');
const RandomNumber = require('../controlers/makingRandomNumber');

router.post('/names/:id',nameAndNumber);
router.get('/dice',RandomNumber);

module.exports= router;