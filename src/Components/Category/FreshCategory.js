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
      <Row className="text-center">      
          {items.slice(0, 6).map((item) => (
            <Col lg={4} md={4} sm={6} xs={6}>
            <Card key={item.id} className="my-2 clickable-item">
              <Card.Body>{item.text}</Card.Body>
            </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default FreshCategory;