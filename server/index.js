const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/ProductsRoute.js');

const app = express();

// Middleware
app.use(bodyParser.json());
// Routes
app.use('/products', productsRouter);


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
