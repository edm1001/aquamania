import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import productsData from "../db/Products/Products.json";

const ProductsPage = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");

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
      // turn to modal with direct link or add to cart option
      // card will have image, name, price cart icon
      <Container>
        <Card className="mb-4">
          <div className="card-image-container">
            <Card.Img
              className="card-image"
              variant="top"
              src={product.imageUrl}
            ></Card.Img>
            <div className="card-details">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-small">
                  {product.description}
                </Card.Text>
                <Card.Text className="font-weight-bold">
                  {product.price}
                </Card.Text>
                <a href={product.affiliateLink} className="btn btn-primary">
                  Add to Cart
                </a>
              </Card.Body>
            </div>
          </div>
        </Card>
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
