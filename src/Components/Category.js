import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";

const Category = () => {
  const buttonVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      rotateX: 10,
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Container>
      <Row className="py-5 justify-content-center align-items-center">
        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="text-center">
          <div className="">
            <h4 className="">Select your side of the Waters:</h4>
          </div>
          <div className="">
            <motion.button
              className="3d-button btn btn-success me-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="rest"
            >
              <Link
                to="/freshpage"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Freshwater
              </Link>
            </motion.button>
            <motion.button
              className="3d-button btn btn-info"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="rest"
            >
              <Link
                to="/saltpage"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Saltwater
              </Link>
            </motion.button>
          </div>
        </Col>
        <Col xl={6} lg={6} md={6} className="col-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt=""
            className="ctgry-img img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Category;
