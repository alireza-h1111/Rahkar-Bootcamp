const jwt = require('jsonwebtoken');
function tokenValidator (req , res, next){
    console.log('middleware');

    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json("Unauthorized!");
    }


    const token = req.headers?.authorization?.split(' ');
    if(!token[1]){
        res.status(401).json("unauthorized!");
    }
    const payload = jwt.decode(token[1]);
    if (payload.exp < Math.floor( new Date().getTime() / 1000 )){
        res.json("Invalid credentials")
    }
    try {
        jwt.verify(token[1], "alireza")
        next();
    } catch (error) {
        res.status(401).json("unauthorized!");

    }
}

module.exports = tokenValidator;