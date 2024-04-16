import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/aquamania-logo.gif";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoFish, IoFishOutline } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div initial={{ opacity: 1 }}>
      <Navbar
        className="mb-5"
        sticky="top"
        bg="white"
        data-bs-theme="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} width="80" height="80" alt="brand-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            className={`custom-menu ${isMenuOpen ? "menu-open" : ""} me-2`}
            aria-controls="responsive-navbar-nav"
            onClick={handleToggleClick}
          >
            {isMenuOpen ? <IoFishOutline size={36} /> : <IoFish size={30}/>}
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="">
              <NavDropdown title="Fish" className="text-center">
                <Link to="/freshpage" className="dropdown-item text-center">
                  Freshwater Fish
                </Link>
                <Link to="/category" className="dropdown-item text-center">
                  Saltwater Fish
                </Link>
              </NavDropdown>
              <Nav.Link href="/products" className="text-center">
                Shop Page
              </Nav.Link>
              <Nav.Link href="/about" className="text-center">
                About Us
              </Nav.Link>
              <Nav.Link href="/blog" className="text-center">
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
