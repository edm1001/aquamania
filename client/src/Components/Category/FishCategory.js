import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FreshwaterFishSpecies from "../../db/Fresh/FeshwaterFishData.json";
import SaltwaterFishSpecies from "../../db/Salt/SaltwaterFishData.json";

const FamilyDropdown = ({ family, species }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const handleOptionSelect = (event) => {
    const selectedSpeciesName = event.target.value;
    const selectedSpecies = JSON.parse(selectedSpeciesName);
    setSelectedSpecies(selectedSpecies);
    window.location.href = `/species/${encodeURIComponent(
      selectedSpecies.name
    )}`;
  };

  return (
    <div className="form-group">
      <div className="form-row align-items-center">
        {/* Select Dropdown */}
        <div className="col">
          <select
            id="species-select"
            className="form-control m-1"
            onChange={handleOptionSelect}   
            aria-label={`Select a fish from the ${family} family`}
          >
            <option value="" className="fw-bold text-center cursor-pointer ">
              {family} 
            </option>
            {species.length > 0 ? (
              species.map(({ name, id }) => (
                <option key={id} value={JSON.stringify({ name, id })}>
                  {name}
                </option>
              ))
            ) : (
              <option disabled>No species available</option>
            )}
          </select>
  
        </div>
      </div>
    </div>
  );
};

const FishCategory = ({ isFreshwater }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredFishSpecies, setFilteredFishSpecies] = useState([]);

  const fishData = isFreshwater ? FreshwaterFishSpecies : SaltwaterFishSpecies;

  const categoryOptions = [
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

  const filterFishSpecies = (filter) => {
    setSelectedFilter(filter);
    const filteredSpecies = fishData.filter((species) => {
      return (
        filter === null ||
        filter === species.temperament ||
        filter === species.size
      );
    });
    setFilteredFishSpecies(filteredSpecies);
  };

  useEffect(() => {
    filterFishSpecies(null);
  }, []);

  const groupedSpecies = {};
  filteredFishSpecies.forEach((species) => {
    if (!groupedSpecies[species.family]) {
      groupedSpecies[species.family] = [];
    }
    groupedSpecies[species.family].push(species);
  });

  return (
    <Container className="my-5">
      {/* category options */}
      <Row className="justify-content-center">
        {categoryOptions.map((item) => (
          <Col xs={2} key={item.id} className="my-2">
            <div
              className={`clickable-item category-text text-center font-weight-bold mb-4 ${
                selectedFilter === item.text ? "category-selected" : ""
              }`}
              onClick={() => filterFishSpecies(item.text)}
            >
              {item.text}
            </div>
          </Col>
        ))}
      </Row>

      {/* category results */}
      <Row  className="mt-1">
        {Object.keys(groupedSpecies).map((family) => (
          <Col xl={3} lg={3} md={4} sm={6} xs={6} key={family} >
            <FamilyDropdown family={family} species={groupedSpecies[family]} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FishCategory;
