import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/carousel";

const Welcome = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const searchTopics = [
    {
      label: "Freshwater",
      description:
        "Explore freshwater aquariums with a variety of fish and plants.",
      background: "https://via.placeholder.com/600x400",
      page: "/freshpage",
    },
    {
      label: "Saltwater",
      description:
        "Dive into stunning saltwater aquariums, coral reefs, and exotic fish",
      background: "https://via.placeholder.com/600x400",
      page: "/saltpage",
    },
    // {
    //   label: "Products",
    //   description: "Learn essential fish care, from feeding to health.",
    //   background: "https://via.placeholder.com/600x400",
    // },
  ];
  // add buttons to link to page
  return (
    <Container fluid>
      {/* Button Section */}
      <Row className="welcome-buttons">
        {searchTopics.map((topic, index) => (
          <Col
            key={index}

            className="welcome-col p-5"
            onMouseEnter={() => setHoveredTopic(index)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div
              className={`welcome-button ${
                hoveredTopic === index ? "hovered" : ""
              }`}
              style={{
                backgroundImage:
                  hoveredTopic === index ? `url(${topic.background})` : "none",
              }}
            >
              <div className="description text-center">
                <p>{topic.description}</p>
              </div>
              <Link to={topic.page} className="link-button">
              <div className="button-content">
                {topic.label}
              </div>
              </Link>
              
            </div>
          </Col>
        ))}
      </Row>

      {/* Carousel Section */}
      {/* <Row className="welcome-carousel">
        <Col>
          <Carousel>
            {searchTopics.map((topic, index) => (
              <Carousel.Item key={index}>
                <img
                  src={topic.background}
                  alt="welcome-img"
                  className="d-block w-100"
                  style={{ height: "300px", objectFit: "cover" }} // Set a fixed height
                />
                <Carousel.Caption className="text-center align-center">
                  <h3>{topic.label}</h3>
                  <p>{topic.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row> */}
    </Container>
  );
};
export default Welcome;
