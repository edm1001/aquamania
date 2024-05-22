import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      console.log("Cart Items:", data); // Log cartItems to inspect its content
      setCartItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("Trouble fetching cart items", err);
      setCartItems([]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = async (productId) => {
    try {
      await fetch (`http://localhost:5000/api/cart/${productId}`, {
        method: "DELETE",
      });
        setCartItems(cartItems.filter((item) => item.id !== productId));
    }catch (error) {
      console.error("Trouble removing item from cart:", error);
    }
  };

  // Function to update the quantity of an item in the cart
  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Calculate total price IF theres a product in cart
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => {
      const priceString = item.price.replace(/[$,]/g, '');
      const price = parseFloat(priceString) * item.quantity;
      return !isNaN(price) ? acc + price : acc;
    }, 0);
    setTotalPrice(total);
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-3">
              <Row className="align-items-center">
                <Col md={6}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  />
                </Col>
                <Col md={4}>
                  <p className="mb-0">{item.name}</p>
                  <p className="text-muted">{item.price}</p>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </Col>
                <Col md={2}>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}><BsFillTrash3Fill /></Button>
                </Col>
              </Row>
            </div>
          ))}
          <hr />
          <p className="text-end mb-4">Total: ${totalPrice.toFixed(2)}</p>
          <Button variant="primary" className="float-end">Checkout</Button>
          {/*creates a wishlist or cart automatically on amazon*/}
          {/* FP: do for other sites, seperated by rows so users have options */}
        </div>
      )}
    </Container>
  );
};

export default CartPage;
