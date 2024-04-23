import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import Carousel from "react-bootstrap/carousel";


// import Freshwater from '../assets/videos/fresh/koi.mp4';
// import Saltwater from '../assets/videos/salt/clownfish1.mp4';
// import Care from '../assets/videos/fresh/fresh-sm-community.mp4';
// import Placeholder from '../assets/photos/placeholder.png'

const Welcome = () => {
  const searchTopics = [
    {
      label: "Freshwater",
      description:
        "Explore freshwater aquariums with a variety of fish and plants.",
      background: "Freshwater",
    },
    {
      label: "Saltwater",
      description:
        "Dive into stunning saltwater aquariums, coral reefs, and exotic fish",
      background: "Saltwater",
    },
    {
      label: "Fish Care",
      description: "Learn essential fish care, from feeding to health.",
      background: "Care",
    },
  ];

  return (
    <Container fluid>
      <Row className="bg-info py-2 text-white">
        <Col>
          <h4 className="justify-content-center align-center fw-bold  pt-1 mx-5">
            Search Topics:
          </h4>
        </Col>
            <Col>
                <Row>
                    <Col className="pe-0" lg={8} md={8} sm={8} xs={8}>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=""
                        />
                    </Col>
                    <Col className='ps-0' lg={4} md={4} sm={4} xs={4}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Col>
        </Row>

      <Row>
        <div className="">
          <Carousel>
            {searchTopics.map((topic, index) => (
              <Carousel.Item key={index}>
                <video
                  src={topic.background}
                  autoPlay
                  loop
                  muted
                  text="First slide"
                  alt="welcome-img"
                  className="d-block w-100"
                  style={{ height: "70%" }}
                />
                <Carousel.Caption className="text-center align-center">
                  <h3>{topic.label}</h3>
                  <p>{topic.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Row>
    </Container>
  );
};
export default Welcome;
