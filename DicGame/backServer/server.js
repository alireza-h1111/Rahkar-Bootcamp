const express = require('express');
const  app = express();
const cors = require('cors');
const routes = require('./routs/routes');

app.use(routes);
app.use(cors());
app.use(express.json())
app.use("/game", routes)
app.listen(8002, () => {
    console.log('hi');
})
 