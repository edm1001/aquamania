import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import image from "../assets/photos/placeholder.png";
import image2 from "../assets/photos/placeholder.png";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$19.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: image,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$29.99",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: image2,
  },
  // Add more products
];

const Products = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4 text-center">Featured Products</h1>
      <p>These are hobbyist trusted products that sponser the maintence of the website</p>
      <Row>
        {products.map((product) => (
          <Col lg={3} md={4}sm={6} xs={6}key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.imageUrl} ></Card.Img>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                <button className="btn btn-primary">Add to Cart</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
