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
  res.status(200).json({ message: 'Product added to cart successfully', cartItems});
});

// Remove an item from the cart
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  cartItems = cartItems.filter(item => item.id !== productId);
  res.status(200).json({ message: 'Product removed from cart successfully', cartItems});
});

// update product quantity
router.put('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const { quantity } = req.body;
  const item = cartItems.find(item => item.id === productId);
  
  if (item) {
    item.quantity = quantity;
    res.status(200).json({ message: 'Product quantity updated successfully', item });
  } else {
    res.status(404).json({ message: 'Product not found in cart' });
  }
});

module.exports = router;