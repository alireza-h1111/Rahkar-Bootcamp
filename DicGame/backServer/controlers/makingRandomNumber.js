function RandomNumber (req, res, next) {
    let diceNumber;
    diceNumber=Math.floor( (Math.random() * 6)  + 1 );

  
    let data = {number: diceNumber}
    res.json(data)
}

module.exports = RandomNumber