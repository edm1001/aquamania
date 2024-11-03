import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


function WaterCategory() {
    const [hoveredTopic, setHoveredTopic] = useState(null);
    const searchTopics = [
        {
          label: "Freshwater",
          description:
            "Explore freshwater aquariums with a variety of fish and plants.",
          background:
            "https://images.unsplash.com/photo-1665853463786-6a2e2a540446?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          page: "/freshpage",
        },
        {
          label: "Saltwater",
          description:
            "Dive into stunning saltwater aquariums, coral reefs, and exotic fish",
          background: "https://images.unsplash.com/photo-1524096613842-71a8c45f08a2?q=80&w=2260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          page: "/saltpage",
        }
      ];
  return (
    <>
          {/* Button Section */}
          <Row className="water-category">
        {searchTopics.map((topic, index) => (
          <Col
            key={index}
            className="welcome-col text-white"
            style={{ height: "100%" }}
            onMouseEnter={() => setHoveredTopic(index)}
            onMouseLeave={() => setHoveredTopic(null)}
          >
            <div
              className={`welcome-button p-5 ${
                hoveredTopic === index ? "hovered" : ""
              }`}
              style={{
                width: "100%",
                height: "200px",
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
                <div className="button-content text-white fw-bold fs-3">{topic.label}</div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default WaterCategory