const express = require('express');
const  app = express();
const routes = require('./routs/items.routes')
const cors = require('cors');

const optionRoutes = require('./routs/items.routes');

app.use(cors());
app.use(express.json())
app.use(routes);

app.use("/api/items", optionRoutes)



app.listen(3000, () => {
    console.log('hi');
})
