import React from "react";
import Searchbar from "../Components/Searchbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FishCategory from "../Components/Category/FishCategory";
import WaterCategory from "../Components/Category/WaterCategory";
import About from "../Components/About";
import Contact from "../Components/Contact";

function FreshPage() {
  return (
    <>
    <div className="freshpage">
      <WaterCategory />
      <div className="p-2 border rounded fresh-comp my-2">
        <Container >
          <Row className="my-5">
            <Col className="">
              <h1 className="text-center text-primary font-bold">Freshwater</h1>
            </Col>
            <Col>
              <Searchbar isFreshwaterPage={true} />
            </Col>
          </Row>
          <FishCategory isFreshwater={true} />
        </Container>
      </div>
      <About />
      <Contact/>
    </div>
    </>
  );
}

export default FreshPage;
