import React from "react";
import SaltCategory from "../Components/Category/SaltCategory";
import Category from "../Components/Category";
import { Container } from "react-bootstrap";

function SaltPage() {
  return (
    <Container>
      <h1 className="text-center">Saltwater</h1>
      <Category />
      <SaltCategory />
    </Container>
  );
}

export default SaltPage;