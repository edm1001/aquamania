import React from "react";
// import FreshCategory from "../Components/Category/FreshCategory";
import Category from "../Components/Category";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FishCategory from "../Components/Category/FishCategory";

function FreshPage() {
  return (
    <Container>
      <Category />
      <Row>
        <Col className="">
          <h1 className="text-center">Freshwater</h1>
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
