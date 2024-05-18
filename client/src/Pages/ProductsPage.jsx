import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../Components/ProductCard';
import productsData from '../db/Products/Products.json';

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch("/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.error("Trouble fetching products:", error);
  //   }
  // };
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
    <div className="mx-1 product-section pt-3 pb-5">
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
