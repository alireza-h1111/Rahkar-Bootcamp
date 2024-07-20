const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/route');

app.use(cors());
app.use(express.json());
app.use('/backend', routes);

app.listen(4500, () => {
  console.log("listening on 4500 from backend...");
});
