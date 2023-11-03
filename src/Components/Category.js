import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Category =() => {
  
  return (
    <Container className="py-5">
    <div className="text-center">
    <Button className="mx-4">Freshwater</Button>
    <Button className="mx-4">Saltwater</Button>
    </div>
  </Container>
  )
} 
export default Category;