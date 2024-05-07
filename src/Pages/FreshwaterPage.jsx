import React from "react";
import FreshCategory from "../Components/Category/FreshCategory";
import Category from "../Components/Category";
import Container from "react-bootstrap/Container";
import Searchbar from "../Components/Searchbar";

function FreshPage() {
  // add betta, platy, pleco,  koi, 
  return (
    <Container>
      <Category />
      <h1 className="text-center">Freshwater</h1>
      <FreshCategory />
      <Searchbar />
    </Container>
  );
}

export default FreshPage;
