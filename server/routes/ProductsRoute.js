const express = require('express');
const router = express.Router();

const productData = require('../../client/src/db/Products/Products.json');

// get all products
router.get('/', (req, res) => {
    res.json(productData);
});

// get a single product by ID
router.get ('/:id', (req,res) => {
    const productId = req.params.id;
    const product = productData.find(product => product.id === parseInt(productId, 10));

    if(product) {
        res.json(product);
    }else {
        res.status(404).send('Product not found');
    }
})

module.exports = router;