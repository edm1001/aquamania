import React from "react";
import FreshCategory from "../Components/Category/FreshCategory";
import Category from "../Components/Category";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FreshPage() {
  // add betta, platy, pleco,  koi,
  return (
    <Container>
      <Category />
      <Row>
        <Col className="">
          <h1 className="text-center">Freshwater</h1>
        </Col>
        <Col>
          <Searchbar />
        </Col>
      </Row>
      <FreshCategory />
    </Container>
  );
}

export default FreshPage;
