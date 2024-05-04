import React from "react";
import SaltCategory from "../Components/Category/SaltCategory";
import Category from "../Components/Category";
import { Container } from "react-bootstrap";

function SaltPage() {
  return (
    <Container>
      <Category />
      <h1 className="text-center">Saltwater</h1>
      <SaltCategory />
    </Container>
  );
}

export default SaltPage;