const express = require('express');
const router = express.Router();

const {sendigData , savingData} = require('../controllers/sendingDataAndSavingdata')

router.get('/data/get', sendigData)
router.post('/data/save', savingData)

module.exports = router;