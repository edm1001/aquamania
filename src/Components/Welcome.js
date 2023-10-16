import { Container, Row, Col, Button, Form, Carousel, Image } from "react-bootstrap";
import Placeholder from '../assets/photos/placeholder.png';

const Welcome = () => {
    return (
    <Container fluid >
      <Row 
            className="
            bg-info 
            ">
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
          <Col className='ps-0 'lg={4} md={4} sm={4} xs={4} >
            <Button type="submit">Submit</Button>
          </Col>
            </Row>
        </Col>
    </Row>

      <Row>
        <Carousel>
      <Carousel.Item>
        <img src={Placeholder} text="First slide" alt="welcome-img" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={Placeholder} text="First slide" alt="welcome-img" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Placeholder} text="First slide" alt="welcome-img" className="d-block w-100 h-100"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Row>  
  </Container>
    )
}

export default Welcome;