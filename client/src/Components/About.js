import React from "react";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gif from "../assets/aquamania-logo.gif";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center h-100 w-100 py-5 bg-light" 
        id="about"
      >
        <Row className="my-2 text-white">
          <Col
            xl={6}
            lg={6}
            md={6}
            className="d-flex align-items-center justify-content-center h-100"
          >
            <img
              src={gif}
              height={"3600px"}
              width={"360px"}
              alt=""
              className="img-fluid about-img ms-2 rounded"
            />
          </Col>
          <Col className="text-start p-4 abt-section" id="about">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: 1 }}
              className="py-2"
            >
              <h1 className="fw-semibold abt-title">About Aquamania</h1>
              <p className="text-secondary abt-text">
                I created Aquamania as a go-to source for most fish in the aquatic hobby. Whether you are into freshwater or marine aquariums, this site is dedicated to provide the information & tips for your fish or inspire you to find something new.
                <br />
                Whether starting out or a seasoned pro, we're here to share the passion and knowledge with all.
              </p>
              <span className="badge abt-badge d-flex justify-content-center">
                Get in touch with us to be featured!
              </span>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </>
  );
};

export default About;