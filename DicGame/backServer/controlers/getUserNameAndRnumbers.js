let user = [
    {
        id:"1",
        name:"",
    },
    {
        id:"2",
        name:"",
    }
]
let finduser={}

function Username(req, res, next) {
    const id = req.params.id;
    user.forEach((data, i) => {
        if(data.id === id){
            user[i].name = req.body.name;
        }
        console.log(user);
    })

    res.json({message: "name added!"})

} 
module.exports = Username;