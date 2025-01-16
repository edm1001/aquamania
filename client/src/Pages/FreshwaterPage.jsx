import React from "react";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FishCategory from "../Components/Category/FishCategory";
import WaterCategory from "../Components/Category/WaterCategory";

function FreshPage() {
  return (
    <div className="p-4 freshpage">
      <WaterCategory />
      <div className="p-2 border rounded fresh-comp my-2">
        <Container >
          <Row className="my-5">
            <Col className="">
              <h1 className="text-center text-primary">Freshwater</h1>
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
