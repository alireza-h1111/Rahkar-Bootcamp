const express = require('express');
const router = express.Router();
const { addProducts , gettingProducts } = require ('../controlers/product.controler');
const tokenValidator = require('../middleware/tokenValidator');

router.post('/post', addProducts);
router.get('', tokenValidator , gettingProducts);

module.exports= router;