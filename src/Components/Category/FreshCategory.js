import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import semiVideo from '../../assets/videos/fresh/fresh-md-aggressive.mp4';

function FreshCategory() {
  const items = [
    {
      id: 1,
      text: "Aggressive",
      videoUrl: "your_video_url_1.mp4",
    },
    {
      id: 2,
      text: "Semi-Aggressive",
      videoUrl: "your_video_url_2.mp4",
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
      videoUrl: "../../assets/videos/fresh/fresh-md-aggressive.mp4",
    },
    {
      id: 6,
      text: "Small",
      videoUrl: "your_video_url_6.mp4",
    },
  ];

  return (
    <Container>
      <Row className="text-center">      
          {items.slice(0, 6).map((item) => (
            <Col lg={4} md={4} sm={6} xs={6}>
            <Card key={item.id} className="my-2 clickable-item">
            <div className="embed-responsive embed-responsive-16by9">
                <video
                  src={item.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="embed-responsive-item"
                />
              </div>
              <Card.Body>{item.text}</Card.Body>
            </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default FreshCategory;