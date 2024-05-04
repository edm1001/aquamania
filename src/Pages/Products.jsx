import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ProductRating from "../Components/ProductRating";
import productsData from "../db/Products/Products.json";
import { FaCartPlus } from "react-icons/fa";



const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/db/Products/Products.json");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Trouble fetching products:", error);
    }
  };
  const categories = [
    "Filters",
    "Tanks",
    "Heaters",
    "Lights",
    "Skimmers",
    "Accessories",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // add tank, filter, substrate, heater, lighting, decor, water meds, test kits, fish food, maintenance equipment, protein skimmer, hydrometer, salt, RO systems, calcium reactor or supplements, sump systems
 
  const ProductCard = ({ product }) => {
    return (
      // turn to modal with direct link or add to cart option, description, brand name rating
      // card will have image, name, price,rating, cart icon
      <Container>
        <Card className="mb-4" onClick={handleShow}>
          <div className="card-image-container">
            <Card.Img
              className="card-image"
              variant="top"
              src={product.imageUrl}
            ></Card.Img>
            <div className="card-details">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="font-weight-bold">
                  <p><ProductRating rating={product.rating || 0} /></p>
                  <p>{product.price}</p>
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
                />
                <p>{product.price}</p>
                <p><ProductRating rating={product.rating || 0} /></p>
                <p>{product.description}</p>
              </div>
              <div className="col-md-3 d-flex justify-content-end align-items-center">
                <FaCartPlus style={{color:'red', cursor: 'pointer'}} size={30} onClick={handleClose} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    );
  };

  return (
    <div className="mx-1">
      <div className="">
        <h1 className="mt-5 mb-2 text-center">Featured Products</h1>
        <p className="text-sm text-center">
          These are hobbyist trusted products that sponsor the maintenance of
          the website.
        </p>
        <div className="text-center mb-4 product-category">
          {/* Render category buttons */}
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "btn btn-link"
                  : "btn btn-link text-decoration-none"
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
          <button
            className={
              selectedCategory
                ? "btn btn-link text-decoration-none"
                : "btn btn-link"
            }
            onClick={() => setSelectedCategory("")}
          >
            Show All
          </button>
        </div>
      </div>
      <Row>
        {filteredProducts.map((product) => (
          <Col lg={4} md={4} sm={6} xs={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsPage;
