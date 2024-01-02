import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Blog() {
  return (
    <>
    <Container className="text-center">
    <h2>Talk about anything Aqua!</h2>
    <p>We encourage this to be a safe space to debate or talk amongst fish lovers, any hateful or insulting comments will result in deleted comment, topic or account termination.</p>
    </Container>

    <Container>
      <Row>
        <Col as='div' className='w-100' >
        <h3>Topics:</h3>
        <ul className='subject-list'>
        <li><a href='#tank'>Tank Maintenance</a></li>
        <li><a href='#car'>Fish care</a></li>
        <li><a href='#fre'>Freshwater</a></li>
        <li><a href='#salt'>Saltwater</a></li>
        </ul>
        </Col>
        <Col as='div'>
        <h3>Most Popular:</h3>
        <ul>
          <li>topic1</li>
          <li>topic2</li>
          <li>topic3</li>
        </ul>
        </Col>
      </Row>
    </Container>
    </>
  )
}
