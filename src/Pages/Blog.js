import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Blog() {
  return (
    <>
    <Container>
    <h2>Talk about anything Aqua!</h2>
    <p>We encourage this to be a safe space to debate or talk amongst fish lovers, any hateful or insulting comments will result in deleted comment, topic or account termination.</p>
    </Container>

    <Container>
      <Row>
        <Col>
        <h4>Topics:</h4>
        </Col>
        <Col>
        <h4>Most Popular</h4>
        </Col>
      </Row>
    </Container>
    </>
  )
}
