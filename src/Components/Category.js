import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Category =() => {
  
  return (
    <Container className="py-5">
    <div className="text-center">
    <Button className="mx-4">
      <Link title='freshwater'to='/freshpage'>
      </Link>
        Freshwater
      </Button>
    <Button className="mx-4">
      <Link title='saltwater' to='/saltwater' />
      Saltwater
      </Button>
    </div>
  </Container>
  )
} 
export default Category;