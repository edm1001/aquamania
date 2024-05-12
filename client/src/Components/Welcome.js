import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
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
      label: "Products",
      description: "Learn essential fish care, from feeding to health.",
      background: "Care",
    },
  ];
// add buttons to link to page
  return (
    <Container fluid>
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
