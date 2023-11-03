import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Category =() => {
  
  return (
    <Container className="py-5">
    <div className="text-center">
    <Button className="mx-4">
      <Link to='/freshpage'>
      Freshwater
      </Link>
      </Button>
    <Button className="mx-4">Saltwater</Button>
    </div>
  </Container>
  )
} 
export default Category;