import React from 'react';
import FreshCategory from '../Components/Category/FreshCategory';
import Category from '../Components/Category';
import Container from 'react-bootstrap/Container';

function FreshPage() {
    // add betta,cichlid, platy, pleco, arrowanna, gar, koi, catfish, danio
  return (
    <Container>
    <h2>Freshwater</h2>
    <Category/>
    <FreshCategory/>
    </Container>
    );
}

export default FreshPage;