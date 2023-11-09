import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const Category =() => {
  const buttonVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      rotateX: 10,
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    },
  };
  return (
    <Container className="py-5">
    <div className="text-center">
    <motion.button 
       className="3d-button mx-4 btn btn-success"
       variants={buttonVariants}
       whileHover="hover"
       whileTap="rest"
       >
          <Link to="/freshpage" className="text-white" style={{textDecoration:'none'}}>Freshwater</Link>
        </motion.button>
        <motion.button 
       className="3d-button mx-4 btn btn-info"
       variants={buttonVariants}
       whileHover="hover"
       whileTap="rest"
       >
          <Link to="/saltpage" className="text-white" style={{textDecoration:'none'}}>Saltwater</Link>
        </motion.button>
    </div>
  </Container>
  )
} 
export default Category;