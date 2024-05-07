import React from "react";
import SaltCategory from "../Components/Category/SaltCategory";
import Category from "../Components/Category";
import Searchbar from "../Components/Searchbar";
import { Container } from "react-bootstrap";

function SaltPage() {
  return (
    <Container>
      <h1 className="text-center">Saltwater</h1>
      <Searchbar/>
      <SaltCategory />
      <Category />
    </Container>
  );
}

export default SaltPage;