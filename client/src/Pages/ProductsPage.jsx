import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../Components/ProductCard";
import productsData from "../db/Products/Products.json";
import Container from "react-bootstrap/esm/Container";

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "Tanks",
    "Filters",
    "Heaters",
    "Lights",
    "Skimmers",
    "Accessories",
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div fluid className="product-section p-4">
      <Container fluid className="py-2 rounded product-container">
        <div className="text-center text-dark">
          <h1 className="mt-4">Featured Products</h1>
          <p className="text-sm">
            These are hobbyist trusted products that sponsor the maintenance of
            the website.
          </p>
        </div>
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
        <Row>
          {filteredProducts.map((product) => (
            <Col lg={4} md={4} sm={6} xs={6} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsPage;
