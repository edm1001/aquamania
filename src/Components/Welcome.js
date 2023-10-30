import { Container, Row, Col, Button, Form, Carousel, Image } from "react-bootstrap";
import Placeholder from '../assets/photos/placeholder.png';

const Welcome = () => {
  const searchTopics = [
    {
      label: "Freshwater",
      description: "Explore freshwater aquariums with a variety of fish and plants. Get maintenance tips."
  },
  {
      label: "Saltwater",
      description: "Dive into stunning saltwater aquariums, coral reefs, and exotic fish."
  },
  {
      label: "Fish Care",
      description: "Learn essential fish care, from feeding to health."
      }
  ];

  return (
      <Container fluid>
          <Row className="bg-info">
              <Col>
                  <h4 className="justify-content-center align-center fw-bold pt-1">
                      Search Topics:
                  </h4>
              </Col>

              <Col>
                  <Row>
                      <Col className="px-0" lg={8} md={8} sm={8} xs={8}>
                          <Form.Control
                              type="text"
                              placeholder="Search"
                              className=""
                          />
                      </Col>
                      <Col className='ps-0 ' lg={4} md={4} sm={4} xs={4}>
                          <Button type="submit">Submit</Button>
                      </Col>
                  </Row>
              </Col>
          </Row>

          <Row>
              <Carousel>
                  {searchTopics.map((topic, index) => (
                      <Carousel.Item key={index}>
                          <img src={Placeholder} text="First slide" alt="welcome-img" className="d-block w-100 h-100" />
                          <Carousel.Caption>
                              <h3>{topic.label}</h3>
                              <p>{topic.description}</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                  ))}
              </Carousel>
          </Row>
      </Container>
  )
}

export default Welcome;