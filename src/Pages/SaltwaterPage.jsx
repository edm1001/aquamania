import React from "react";
import FishCategory from "../Components/Category/FishCategory";
import Category from "../Components/Category";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SaltPage() {
  return (
    <Container>
      <Row>
        <Col className="">
          <h1 className="text-center">Saltwater</h1>
        </Col>
        <Col>
          <Searchbar isFreshwaterPage={false} />
        </Col>
      </Row>
      <Category />
      <FishCategory isFreshwater={false} />
    </Container>
  );
}

export default SaltPage;
