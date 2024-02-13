const express = require('express');
const app = express();
const cors = require('cors');

// importing routes
const userRoutes = require('./routs/items.routes')
const productsRoutes = require('./routs/products.routes')

app.use(cors());
app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/products", productsRoutes)

app.listen(3000, () => {
    console.log('hi');
})
