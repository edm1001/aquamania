import React from "react";
// import Category from "../Components/Category";
import AboutComp from "../Components/About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "../Components/Contact";
import { Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <div className="mx-1 care-section">
          <h1 className="text-center">Care Tips</h1>
          <p className="text-center mb-5"> Sign up to our newsletter to get the free comprehensive tips</p>
          <Row className="row h-100" >
            {/* Freshwater Fish Care */}
            <Col  className="p-5" xs={12} sm={12} md={6}>
              <h5>Freshwater Fish Care Tips</h5>
              <ul>
                <li>Maintain temperature between 72-82°F</li>
                <li>Regular water changes (25% weekly)</li>
                <li>Monitor pH levels (6.5 - 7.5)</li>
                <li>Feed varied diet (flakes, live food)</li>
                <li>Key Parameters: </li>
              </ul>
            </Col>
            {/* Freshwater Plants Care */}
            <Col className="p-5 bg-success text-white" xs={12} sm={12} md={6}>
              <h5 className="">Freshwater Plants</h5>
              <ul>
                <li>Provide adequate lighting (8-10 hours/day)</li>
                <li>Use plant fertilizers (liquid or root tabs)</li>
                <li>Ensure CO2 levels are sufficient</li>
                <li>Trim dead leaves regularly</li>
                <li>Key Parameters: </li>
              </ul>
            </Col>
          </Row>

          <Row>
            {/* Saltwater Fish Care */}
            <Col className="p-5 " xs={12} sm={12} md={6}>
              <h5>Saltwater Fish Care Tips</h5>
              <ul>
                <li>Maintain temperature between 75-80°F</li>
                <li>Perform regular water changes (20-25% weekly)</li>
                <li>Monitor pH (8.1-8.4) and salinity</li>
                <li>Feed a balanced & varied diet (flakes, frozen food)</li>
                <li>Key Parameters: </li>
                {/* <li>Recommended Products: </li> */}
              </ul>
            </Col>

            {/* Saltwater Corals Care */}
            <Col className="p-5 bg-primary text-white" xs={12} sm={12} md={6}>
              <h5>Corals Care Tips</h5>
              <ul>
                <li>Ensure proper lighting (LED, T5)</li>
                <li>Maintain water flow in the tank</li>
                <li>Monitor calcium, alkalinity, and magnesium levels</li>
                <li>Feed corals with coral food supplements</li>
                <li>Key Parameters: </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
      <Contact />
      <AboutComp/>
    </>
  );
}

export default About;
