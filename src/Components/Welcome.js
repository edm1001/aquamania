import { Container, Row, Col, Button, Form, } from "react-bootstrap";
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

        </Container>
    )
}

export default Welcome;