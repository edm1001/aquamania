import React from "react";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FishCategory from "../Components/Category/FishCategory";
import WaterCategory from "../Components/Category/WaterCategory";

function FreshPage() {
  return (
    <div className="freshpage p-5">
      <WaterCategory />
      <div className="bg-white p-4 border rounded">
        <Container>
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
      </div>
    </div>
  );
}

export default FreshPage;
