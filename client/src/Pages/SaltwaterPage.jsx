import React from "react";
import FishCategory from "../Components/Category/FishCategory";
import Searchbar from "../Components/Searchbar";
import Welcome from "../Components/Welcome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SaltPage() {
  return (
    <Container>
      <Welcome/>
      <Row>
        <Col className="">
          <h1 className="text-center">Saltwater</h1>
        </Col>
        <Col>
          <Searchbar isFreshwaterPage={false} />
        </Col>
      </Row>
      <FishCategory isFreshwater={false} />
    </Container>
  );
}

export default SaltPage;
