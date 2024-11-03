import React from "react";
import FishCategory from "../Components/Category/FishCategory";
import SearchBar from "../Components/Searchbar";
import WaterCategory from "../Components/Category/WaterCategory";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SaltPage() {
  return (
    <div className="saltpage p-5">
      <WaterCategory />
      <div className="p-4 border rounded salt-comp">
        <Container>
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
      </div>
    </div>
  );
}

export default SaltPage;
