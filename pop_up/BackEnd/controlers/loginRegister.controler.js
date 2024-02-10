const user = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds= 10
const secretKey = "alireza"
const Respond = require('../utils/respond')
 // login and making token

exports.register = async (req, res)=>{
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt)
    console.log(salt);
    console.log(hashedPassword);
    try {
        let result = await user.create({
            username : req.body.username,
            password : hashedPassword,
            // createdAt : new Date(),
            // updatedAt : new Date(),
        })
        res.status(200).json({message: "added"})
    } catch (error) {
        res.status(400).json({message: " error"})
    }
}

// registering after checking token
exports.login = async (req, res)=>{
    const { username, password } = req.body
    console.log(username);
    let decodedPassword = false
    try {
        let result = await user.findOne({
            where:{ username : username},
        })
        console.log(password);
        if (result){
            decodedPassword = await bcrypt.compareSync( password , result.password )
            console.log(decodedPassword);
            if (decodedPassword){
                var token = await jwt.sign({name: result.username}, secretKey , {expiresIn:'2h'})
                res.status(200).json(token);
                console.log(token);
            }else{
                res.status(404).json({message:"wrong password"})
            }
        }else{
            res.status(404).json({message:"user not found"})
        }
    }catch (error) {
        console.error(error)
        res.status(500).json({message: "interanl server error"})
    }
} 

//getting all the users
exports.gettingUsers= async( req , res )=>{
    console.log("conroler");
    try {
        let result = await user.findAll({
        })
        console.log(result);
        if(result){
            res.status(200).json(new Respond(result, true , "success"));
        }
    } catch (error) {
        res.status(500).json({message:" interanl server error"})
    }
}