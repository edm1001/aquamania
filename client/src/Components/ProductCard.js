import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FaCartPlus, FaAmazon } from "react-icons/fa";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleAddToCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to add product to cart : ${error}`);
      }
      console.log("Product added to cart", product);
      handleClose();
    } catch (error) {
      console.error("Trouble adding product to cart:", error);
    }
  };

  return (
    // card will have image, name, price,rating, cart icon
    <Container className="product-section">
      <Card className="mb-4" style={{ cursor: "pointer" }} onClick={handleShow}>
        <div className="card-image-container">
          <Card.Img
            className="card-image"
            variant="top"
            src={product.imageUrl}
            style={{ maxHeight: "100px", objectFit: "cover" }}
          />
          <div className="card-details">
            <Card.Body className="p-3">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="font-weight-bold mb-0">
                <ProductRating rating={product.rating || 0} />
                <span>{product.price}</span>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-9">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <p>{product.price}</p>
              <ProductRating rating={product.rating || 0} />
              <p>{product.description}</p>
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center mx-auto">
              <FaAmazon
                title="Buy Now"
                style={{ color: "#4caf50", cursor: "pointer" }}
                size={30}
                className="me-2"
              />
              <FaCartPlus
                title="Add to Cart"
                style={{ color: "#007ea7", cursor: "pointer" }}
                size={30}
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductCard;
