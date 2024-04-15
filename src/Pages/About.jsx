import React from 'react'
import Category from '../Components/Category';
import {Row, Col, Container} from 'react-bootstrap'

function About() {
  return (
    <Container>
    <Row>
    <Col>
    <img
            src="https://via.placeholder.com/600x400"
            alt=""
            className="img-fluid"
          /></Col>
      <Col className='text-center p-2'>
      <h2 className='mb-3'>About Aquamania</h2>
      <p className='px-1'>
      Welcome to Aquamania, where our passion for aquatic life meets a commitment to providing comprehensive and reliable information on fish care. At Aquamania, we believe that every fish enthusiast, from beginners to seasoned hobbyists, deserves access to accurate and practical guidance. Our team of passionate enthusiasts has come together to create a hub of knowledge covering everything from choosing the right fish species to maintaining a thriving aquarium ecosystem and to help avoid fish abuse. Whether you're embarking on your first fish-keeping journey or looking to expand your aquatic expertise, Aquamania is here to be your go-to resource. Dive in and explore the fascinating world of fish care with confidence, backed by our commitment to quality content and community support.
      </p>
    </Col>
    </Row>
    <Category/>
    <Row>
      <Col>          <img
            src="https://via.placeholder.com/600x400"
            alt=""
            className="ctgry-img img-fluid"
          /></Col>
    <Col className='text-center mx-1'>
      <h2>Basic Care</h2>
      <p>
      This company was founded with the primary objective of educating individuals and fostering a high quality of life for our pet fish. Aquariums, recognized for their stress-reducing benefits, promote our well-being. Therefore, maintaining a clean and healthy aquarium will result in happier fish and happier you. If you are a new to this hobby, welcome and please read about multi-tank syndrome!</p>
      <p> The key to achieving a thriving aquarium is maintaining stable parameters. Whatever parameters—such as pH or temperature—favor the well-being of your fish should be preserved without unnecessary alterations. Pursuing specific water parameters is generally unnecessary unless one is actively engaged in fish breeding. Keeping fish in a stable and well-balanced environment, consistent with their natural habitat, contributes significantly to their contentment and overall well-being.</p>
    </Col>
    </Row>
    </Container>
  )
}

export default About