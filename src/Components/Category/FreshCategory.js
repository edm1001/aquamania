import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import semiVideo from '../../assets/videos/fresh/fresh-md-aggressive.mp4';
import freshwaterFishSpecies from '../../db/FeshwaterFishData.js';

function FreshCategory() {
  const [selectedFilter, setSelectedFilter] = useState(null);

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
        videoUrl: semiVideo
      },
      {
        id: 6,
        text: "Small",
        videoUrl: "your_video_url_6.mp4",
      },
    ];
  
    const filterFishSpecies = (filter) => {
      setSelectedFilter(filter);
    };
  
    return (
      <Container>
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
              {freshwaterFishSpecies.map((species, index) => (
                (selectedFilter === null || selectedFilter === species.temperament || selectedFilter === species.size ) && (
                  <div key={index}>
                    <h2>{species.name}</h2>
                    <img alt="" className="h-100 w-100 " src={species.img}> 
                    </img>
                    <p>{species.description}</p>
                    <p>Temperament: {species.temperament}</p>
                    <p>Max Growth Size: {species.maxGrowthSize}</p>
                  </div>
                )
                // have just the name and it leads to the single page
              ))}  
          </div>
        </Container>
      </Container>
    );
}

export default FreshCategory;