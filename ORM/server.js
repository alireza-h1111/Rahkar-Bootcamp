const express=require("express")
const cors=require("cors")

const backRoute=require("./routes/backRoute.route")

const PORT=3000;

app=express()
app.use(express.json())
app.use(cors())
app.use("/api/ORM",backRoute)



app.listen(PORT,()=>{
    console.log("it is RUNN");
})