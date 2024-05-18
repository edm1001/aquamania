const express = require('express');
const router = express.Router();

let cartItems = [];

// Get all items in the cart
router.get('/', (req, res) => {
  res.json(cartItems);
});

// Add a new item to the cart
router.post('/', (req, res) => {
  const product = req.body;
  cartItems.push(product);
  res.status(200).json({ message: 'Product added to cart successfully', product });
});

// Remove an item from the cart
router.delete('/:id', (req, res) => {
  const productId = req.params.id;
  cartItems = cartItems.filter(item => item.id !== productId);
  res.status(200).json({ message: 'Product removed from cart successfully' });
});

module.exports = router;