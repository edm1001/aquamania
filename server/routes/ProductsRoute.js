const express = require('express');
const router = express.Router();

const productData = require('../../client/src/db/Products/Products.json');

// get all products
router.get('/', (req, res) => {
    res.json(productData);
});

// get a single product by ID
router.get ('/:id', (req,res) => {
    const productId = parseInt(req.params.id, 10);
    const product = productData.find(product => product.id === productId);

    if (product) {
        res.json(product);
    }else {
        res.status(404).send('Product not found');
    }
})

// post product to cartPage
let cartItems = [];

router.post('/', (req, res) => {
  const product = req.body;
  cartItems.push(product);
  res.status(200).json({ message: 'Product added to cart successfully', cartItems });
});

module.exports = router;