import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../Components/ProductCard";
import productsData from "../db/Products/Products.json";
import { FaCartPlus, FaLink } from "react-icons/fa";
import Container from "react-bootstrap/esm/Container";

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "Filters",
    "Tanks",
    "Heaters",
    "Lights",
    "Skimmers",
    "Accessories",
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div fluid className="product-section pt-3 pb-5 bg-dark">
      <Container fluid className="bg-secondary py-2">
        <div className="text-center">
          <h1 className="mt-5 mb-2 ">Featured Products</h1>
          <p className="text-sm ">
            These are hobbyist trusted products that sponsor the maintenance of
            the website.
          </p>
          <p style={{ fontSize: "0.60rem" }}>
            <FaCartPlus color="#007ea7" size={16} /> - Add to cart to make a
            wishlist on Amazon!
          </p>
          <p style={{ fontSize: "0.6rem" }}>
            <FaLink color="#007ea7" size={16} />- Buy Now
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
