import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import freshwaterFishSpecies from "../../db/Fresh/FeshwaterFishData.json";
// import semiVideo from '../../assets/videos/fresh/fresh-md-aggressive.mp4';

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
    <div>
      <h2>{family}</h2>
      <select className="form-control mb-3" onChange={handleOptionSelect}>
        <option value="">Select Species</option>
        {species.map((species) => (
          <option key={species.name} value={JSON.stringify(species)}>
            {species.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const FreshCategory = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredFishSpecies, setFilteredFishSpecies] = useState([]);

  
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
    <Container className="my-5">
      {/* category options */}
      <Row className="justify-content-center text-center">
        {categoryOptions.map((item) => (
          <Col xl={2} lg={2} md={2} sm={2} xs={2} key={item.id} className="my-2">
            {/* make a button that transforms to the card when clicked */}
            <Button
              className={`btn btn-success clickable-item text-white category-text h-100 font-weight-bold ${
                selectedFilter === item.text ? "category-selected" : ""
              }`}
              onClick={() => filterFishSpecies(item.text)}
            >
              {item.text}
            </Button>
          </Col>
        ))}
      </Row>

      {/* category results */}
      <Row className="mt-5">
        {Object.keys(groupedSpecies).map((family) => (
          <Col xl={3} lg={3} md={4} sm={6} xs={6} key={family}>
            <FamilyDropdown family={family} species={groupedSpecies[family]} />
          </Col>
        ))}
      </Row>
    </Container>
    
  );
};

export default FreshCategory;
