const express = require('express');
const router = express.Router();
const { register, login, gettingUsers} = require('../controlers/loginRegister.controler') 
const tokenValidator = require('../middleware/tokenValidator');
//register Item to DB route 
router.post("/register", register)

// login check
router.post("/login", login)

// gething users
router.get("/users", tokenValidator , gettingUsers) 

module.exports= router;
