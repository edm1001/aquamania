import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// create link to make
const CartPage = ({cartItems, setCartItems}) => {
  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  // Calculate total price IF theres a product in cart
  const totalPrice =cartItems && cartItems.length > 0 ? cartItems.reduce((acc, item) => acc + item.price, 0) : 0;

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems && cartItems.map((item) => (
            <div key={item.id} className="mb-3">
              <Row className="align-items-center">
                <Col md={6}>
                  {/* <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-fluid"
                    style={{ maxWidth: "100px" }}
                  /> */}
                </Col>
                <Col md={4}>
                  <p className="mb-0">{item.name}</p>
                  <p className="text-muted">${item.price}</p>
                </Col>
                <Col md={2}>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
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
