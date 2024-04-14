import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import freshwaterFishSpecies from "../../db/Fresh/FeshwaterFishData.json";
// import semiVideo from '../../assets/videos/fresh/fresh-md-aggressive.mp4';


const FamilyDropdown = ({ family, species }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const handleSpeciesSelect = (species) => {
    setSelectedSpecies(species);
  };
// make the dropdown item clickable, links it to the single page
  return (
    <div>
      <h2>{family}</h2>
      <select className="form-control mb-3" onChange={(e) => handleSpeciesSelect(JSON.parse(e.target.value))}>
        <option value="">Select Species</option>
        {species.map((species) => (
          <option key={species.name} value={JSON.stringify(species)}>{species.name}</option>
        ))}
      </select>
      {selectedSpecies && (
        <div>
          <Link to={`/species/${encodeURIComponent(selectedSpecies.name)}`} className="btn btn-primary">View Details</Link>
        </div>
      )}
    </div>
  );
};


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
      videoUrl: "semiVideo",
    },
    {
      id: 6,
      text: "Small",
      videoUrl: "your_video_url_6.mp4",
    },
  ];
  // turn this into modal
  const filterFishSpecies = (filter) => {
    setSelectedFilter(filter);

    const filteredSpecies = freshwaterFishSpecies.filter((species) => {
      return (
        filter === null ||
        filter === species.temperament ||
        filter === species.size
      );
    });
    setFilteredFishSpecies(filteredSpecies);
  };

  const groupedSpecies = {};
  filteredFishSpecies.forEach((species) => {
    if (!groupedSpecies[species.family]) {
      groupedSpecies[species.family] = [];
    }
    groupedSpecies[species.family].push(species);
  });
return (
  <Container className="mb-5">
  {/* category options */}
  <Row className="text-center">
    {items.map((item) => (
      <Col lg={4} md={4} sm={6} xs={6} key={item.id}>
        <Card
          className={`my-2 clickable-item ${
            selectedFilter === item.text ? "selected" : ""
          }`}
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

  {/* category results */}
  <Row>
    {Object.keys(groupedSpecies).map((family) => (
      <Col xl={3} lg={3} md={4} sm={6} xs={6} key={family}>
        <FamilyDropdown family={family} species={groupedSpecies[family]} />
      </Col>
    ))}
  </Row>
</Container>
);
}

export default FreshCategory;
