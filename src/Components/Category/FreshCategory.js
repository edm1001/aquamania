import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import semiVideo from '../../assets/videos/fresh/fresh-md-aggressive.mp4';
import freshwaterFishSpecies from '../../db/Fresh/FeshwaterFishData.js';

function FreshCategory() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredFishSpecies, setFilteredFishSpecies] = useState([]);

    const items = [
      {
        id: 1,
        text: "Aggressive",
        videoUrl: "your_video_url_1.mp4",
      },
      {
        id: 2,
        text: "Semi-Aggressive",
        videoUrl: "your_video_url_1.mp4",
      },
      {
        id: 3,
        text: "Peaceful",
        videoUrl: "your_video_url_3.mp4",
      },
      {
        id: 4,
        text: "Large",
        videoUrl: "your_video_url_4.mp4",
      },
      {
        id: 5,
        text: "Medium",
        videoUrl: "semiVideo"
      },
      {
        id: 6,
        text: "Small",
        videoUrl: "your_video_url_6.mp4",
      },
    ];
  
    const filterFishSpecies = (filter) => {
      setSelectedFilter(filter);

      const filteredSpecies = freshwaterFishSpecies.filter((species) => {
        return (
          filter === null ||
          filter === species.temperament ||
          filter === species.size
        )
      });
      setFilteredFishSpecies(filteredSpecies);
    };

    return (
      <Container className="mb-5">
        <Row className="text-center">      
          {items.map((item) => (
            <Col lg={4} md={4} sm={6} xs={6} key={item.id}>
              <Card
                className={`my-2 clickable-item ${selectedFilter === item.text ? "selected" : ""}`}
                onClick={() => filterFishSpecies(item.text)}
              >
                <div className="embed-responsive embed-responsive-16by9">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 h-100 embed-responsive-item"
                  />
                </div>
                <Card.Body>{item.text}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Container>
        <div>
          {filteredFishSpecies.map((species, index) => {
            const isSameAsNext =
              index < filteredFishSpecies.length - 1 &&
              species.family === filteredFishSpecies[index + 1].family;

            if (!isSameAsNext) {
              return (
                <div key={index}>
                  <h2>{species.family}</h2>
                  <Link to={`/species/${encodeURIComponent(species.name)}`}>
                    <p>{species.name}</p>
                  </Link>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <Link to={`/species/${encodeURIComponent(species.name)}`}>
                    <p>{species.name}</p>
                  </Link>
                </div>
              );
            }
          })}
        </div>

      </Container>
    </Container>
  );
}

export default FreshCategory;