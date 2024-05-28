import React from "react";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        className="text-center h-100 w-100 py-5 px-3 abt-section"
      >
        <Row>
          <Col
            xl={6}
            lg={6}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="https://via.placeholder.com/500x500"
              alt=""
              className="img-fluid h-75 about-img"
            />
          </Col>
          <Col className="text-center p-5 abt-section">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: 1 }}
              className="py-2"
            >
              <h1 className="fw-semibold abt-title">About Aquamania</h1>
              <p className="text-white">
                I created Aquamania as a go-to source for most fish in the aquatic hobby. Whether you are into freshwater or marine aquariums, this site is dedicated to provide the information & tips for your fish or inspire you to find something new.
                <br />
                Whether starting out or a seasoned pro, we're here to share the passion and knowledge with all.
              </p>
              <span className="badge abt-badge">
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