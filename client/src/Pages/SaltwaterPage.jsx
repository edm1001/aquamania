import React from "react";
import FishCategory from "../Components/Category/FishCategory";
import SearchBar from "../Components/Searchbar";
import WaterCategory from "../Components/Category/WaterCategory";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import About from "../Components/About";
import Contact from "../Components/Contact";

function SaltPage() {
  return (
    <>
    <div className="saltpage">
      <WaterCategory />
      <div className="m-5 border rounded salt-comp">
        <Container>
        <Row className="p-5">
          <Col className="">
            <h1 className="text-center text-primary font-bold">Saltwater</h1>
          </Col>
          <Col>
            <SearchBar isFreshwaterPage={false} />
          </Col>
        </Row>
        <FishCategory isFreshwater={false} />
        </Container>
      </div>
      <About/>
      <Contact/>
    </div>
    </>
  );
}

export default SaltPage;
