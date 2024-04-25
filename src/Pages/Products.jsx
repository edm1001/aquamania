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
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: image2,
  },
  // Add more products
];
// add tank, filter, substrate, heater, lighting, decor, water meds, test kits, fish food, maintenance equipment, protein skimmer, hydrometer, salt, RO systems, calcium reactor or supplements, sump systems

const ProductCard = ({ product }) => {
  return (
    <Card className="mb-4">
    <div className="card-image-container">
      <Card.Img className="card-image" variant="top" src={product.imageUrl}></Card.Img>
      <div className="card-details">
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-small">{product.description}</Card.Text>
          <Card.Text className="font-weight-bold">{product.price}</Card.Text>
          <button className="btn btn-primary">Add to Cart</button>
        </Card.Body>
      </div>
    </div>
  </Card>
  );
};

const ProductsPage = () => {
  return (
    <Container>
      <div className="">
      <h1 className="mt-5 mb-2 text-center">Featured Products</h1>
      <p className="text-sm text-center">
        These are hobbyist trusted products that sponser the maintenance of the
        website.
      </p>
      </div>
      <Row>
      {products.map((product) => (
          <Col lg={3} md={3} sm={4} xs={4} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsPage;
