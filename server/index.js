const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const productsRoute = require('./routes/ProductsRoute.js');
const cartRoute = require('./routes/CartRoute.js');

app.use('/api/products', productsRoute);
app.use('/api/cart', cartRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
