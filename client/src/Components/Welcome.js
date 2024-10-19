import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import { Link } from "react-router-dom";
import image from "../assets/photos/placeholder.png";


const Welcome = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  const searchTopics = [
    {
      label: "Freshwater",
      description:
        "Explore freshwater aquariums with a variety of fish and plants.",
      background: image,
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
  return (
    <Container fluid>
      {/* Button Section */}
      <Row className="welcome-buttons">
        {searchTopics.map((topic, index) => (
          <Col
            key={index}
            className="welcome-col p-5"
            style={{ height: "100%" }}
            onMouseEnter={() => setHoveredTopic(index)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div
              className={`welcome-button p-5 ${
                hoveredTopic === index ? "hovered" : ""
              }`}
              style={{
                height: "100%",
                width: "100%",
                backgroundImage:
                  hoveredTopic === index ? `url(${topic.background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="description text-center">
                <p>{topic.description}</p>
              </div>
              <Link
                to={topic.page}
                className="link-button text-decoration-none"
              >
                <div className="button-content">{topic.label}</div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Welcome;
