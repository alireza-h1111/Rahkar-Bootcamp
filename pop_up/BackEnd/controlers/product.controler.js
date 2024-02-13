const products = require('../models/products')
const Respond = require('../utils/respond')
 // adding and getting products


 //adding products to db
exports.addProducts = async (req, res, next)=> {
    console.log(req.body)
    try {
        let result = await products.create({
            pName: req.body.name,
            pPrice: req.body.price,
        })
        res.status(200).json({message:"successfully added"})
    } catch (error) {
        res.status(400).json(new Response(error, false, ""))
    }
}

// getting products from db
exports.gettingProducts = async (req, res, next)=> {
    try {
        let result = await products.findAll({})
        if(result){
            res.status(200).json(new Respond(result, true, " products successfully loaded"))
        }
    } catch (error) {
        res.status(400).json(new Response(result, false, "error in getting products"))
    }
}