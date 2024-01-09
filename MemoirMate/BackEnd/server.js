const express = require('express');
const  app = express();
const routes = require('./routs/items.routes')
const cors = require('cors');

const optionRoutes = require('./routs/items.routes');
port = 5555
app.use(cors());
app.use(express.json())
app.use(routes);

app.use("/api/memory", optionRoutes)



app.listen(port, () => {
    console.log('listening on port' + port);
})
