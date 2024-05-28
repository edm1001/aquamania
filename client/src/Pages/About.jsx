import React from "react";
import Category from "../Components/Category";
import AboutComp from "../Components/About";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <>
      <AboutComp/>
      <Category />
      <Row>
        <Col xl={6} lg={6} md={6} className="d-flex align-items-center justify-content-center ">
          <div className="bg-success">
            <img
              src="https://via.placeholder.com/600x400"
              alt=""
              className="img-fluid h-75 about-img"
            />
          </div>
        </Col>
        <Col className="text-center mx-1 p-5 care-section">
          <h2 className="care-title">Basic Care</h2>
          <p className="about-page-info">
            We're all about aquarium fish care! Our mission is to educate and
            improve the lives of our finned friends. Aquariums aren't just
            decorations; they're stress-busters for us too. Keeping your tank
            clean and healthy means happier fish and a happier you. If you're
            new to this, welcome aboard! And don't forget to watch out for
            multi-tank syndrome!
          </p>
          <p className="about-page-info">
            {" "}
            What I believe to be a secret to a thriving aquarium? Stability is
            key. Whether it's pH, temperature, or other factors, keeping your
            water consistent is the most vital for fish wellness. Unless you're
            breeding, chasing specific water conditions isn't necessary.
            Creating an environment that mirrors their natural habitat is what
            really counts for fish contentment and health.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
