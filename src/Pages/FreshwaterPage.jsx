import React from 'react';
import FreshCategory from '../Components/Category/FreshCategory';
import Category from '../Components/Category';
import Container from 'react-bootstrap/Container';

function FreshPage() {
    // add betta,cichlid, platy, pleco, arrowanna, gar, koi, catfish, danio
  return (
    <Container>
    <h1 className='text-center'>Freshwater</h1>
    <Category/>
    <FreshCategory/>
    </Container>
    );
}

export default FreshPage;