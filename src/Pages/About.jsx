import React from "react";
import Category from "../Components/Category";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Row>
        <Col xl={6} lg={6} md={6} className="d-flex align-items-center justify-content-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt=""
            className="img-fluid h-75 about-img"
          />
        </Col>
        <Col className="text-center p-5 abt-section">
          <h2 className="mb-3 abt-title">About Aquamania</h2>
          <p className="px-1 about-page-info">
            Welcome to Aquamania! We're all about sharing our love for fish and
            ensuring you have reliable info for their care. From newbies to
            pros, everyone deserves accurate advice. Our team of enthusiasts is
            dedicated to covering everything from choosing fish to ecosystem
            maintenance, all to prevent fish abuse. Whether you're starting out
            or leveling up, Aquamania's got your back. Dive in and discover fish
            care confidently, with our quality content and supportive community.
          </p>
        </Col>
      </Row>
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
