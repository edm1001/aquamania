import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function FreshCategory() {
  const items = [
    {
      id: 1,
      text: "Item 1",
      videoUrl: "your_video_url_1.mp4",
    },
    {
      id: 2,
      text: "Item 2",
      videoUrl: "your_video_url_2.mp4",
    },
    {
      id: 3,
      text: "Item 3",
      videoUrl: "your_video_url_3.mp4",
    },
    {
      id: 4,
      text: "Item 4",
      videoUrl: "your_video_url_4.mp4",
    },
    {
      id: 5,
      text: "Item 5",
      videoUrl: "your_video_url_5.mp4",
    },
    {
      id: 6,
      text: "Item 6",
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