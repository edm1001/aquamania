import React from "react";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FishCategory from "../Components/Category/FishCategory";
import WaterCategory from "../Components/Category/WaterCategory";

function FreshPage() {
  return (
    <Container>
      <WaterCategory />
      <Row>
        <Col className="">
          <h1 className="">Freshwater</h1>
        </Col>
        <Col>
          <Searchbar isFreshwaterPage={true} />
        </Col>
      </Row>
      <FishCategory isFreshwater={true} />
    </Container>
  );
}

export default FreshPage;
