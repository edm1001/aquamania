import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaCartPlus, FaLink } from "react-icons/fa";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setQuantity(1);
  };

  const handleAddToCart = async () => {
    try {
      const cartItem = { ...product, quantity };
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
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
    <>
    <Container className="product-section">
      <Card className="mb-4 product-card"  style={{ cursor: "pointer" }} onClick={handleShow}>
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
                <p><ProductRating rating={product.rating || 0} /> </p>
                <span>{product.price}</span>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body closeButton>
          <div className="row">
            <div className="col-md-9">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
              <p className="mt-2 fs-4 fw-semibold">{product.name}</p>
              <p>{product.price}</p>
              <ProductRating rating={product.rating || 0} />
              <p className="mt-4">{product.description}</p>
            </div>
            <div className="col-md-3 d-md-flex justify-content-md-end align-items-md-center">
              <div className="d-flex flex-md-column flex-row">
                <Form.Group className="mb-3 me-md-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </Form.Group>
                <div className="d-flex">
                  <FaLink
                    title="Link to Product"
                    style={{ color: "#007ea7", cursor: "pointer" }}
                    size={30}
                    className="me-2"
                  />
                  <FaCartPlus
                    title="Make a Wishlist on Amazon!"
                    style={{ color: "#007ea7", cursor: "pointer" }}
                    size={30}
                    onClick={handleAddToCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
    </>
  );
};

export default ProductCard;
