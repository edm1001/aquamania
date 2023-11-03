import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function FreshCategory() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
    { id: 6, text: "Item 6" },
  ];

  return (
    <Container>
      <Row>
        <Col md={4}>
          {items.slice(0, 3).map((item) => (
            <Card key={item.id} className="my-2 clickable-item">
              <Card.Body>{item.text}</Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          {items.slice(3, 6).map((item) => (
            <Card key={item.id} className="my-2 clickable-item">
              <Card.Body>{item.text}</Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default FreshCategory;