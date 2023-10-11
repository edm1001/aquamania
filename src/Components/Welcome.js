import { Container, Row, Col, Button, Form} from "react-bootstrap";
const Welcome = () => {
    return (
        <Container fluid >
            <Row>
            <Col>Search Topics:  </Col>
                
            <Col>
            <Col xs={8}>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs={2}>
            <Button type="submit">Submit</Button>
          </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome;