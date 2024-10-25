import React from "react";
import FishCategory from "../Components/Category/FishCategory";
import SearchBar from "../Components/Searchbar";
import WaterCategory from "../Components/Category/WaterCategory";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SaltPage() {
  return (
    <Container>
      <WaterCategory/>
      <Row>
        <Col className="">
          <h1 className="text-center">Saltwater</h1>
        </Col>
        <Col>
          <SearchBar isFreshwaterPage={false} />
        </Col>
      </Row>
      <FishCategory isFreshwater={false} />
    </Container>
  );
}

export default SaltPage;
