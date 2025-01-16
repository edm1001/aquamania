import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { FaLink } from "react-icons/fa";
import ProductRating from "./ProductRating";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setQuantity(1);
  };

  return (
    <>
      <Container className="">
        {/* Product Card */}
        <Card
          className="mb-4 product-card"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        >
          <div className="card-image-container">
            <Card.Img
              className="card-image"
              variant="top"
              src={product.imageUrl}
              style={{ maxHeight: "100px", objectFit: "cover" }}
            />
            <div className="card-details">
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between">
                  <Card.Title className="fs-4">{product.name}</Card.Title>
                  <span className="text-decoration-underline text-secondary">
                    {product.company}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <ProductRating rating={product.rating || 0} />
                  <span className="fw-bold fs-4">{product.price}</span>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
        {/* Modal */}
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
                <div className="d-flex justify-content-between align-items-center mt-2 p-1">
                  <div>
                    <p className="fs-2 fw-bold">{product.name}</p>
                    <ProductRating rating={product.rating || 0} />
                  </div>
                  <div>
                    <p className="text-secondary">{product.company}</p>
                    <p className="fw-bold fs-4">{product.price}</p>
                  </div>
                </div>
                <p className="mt-4">{product.description}</p>
              </div>
              <div className="d-flex justify-content-end px-2">
                <FaLink
                  title="Link to Product"
                  style={{ color: "#007ea7", cursor: "pointer" }}
                  size={30}
                  className="me-2"
                />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default ProductCard;
