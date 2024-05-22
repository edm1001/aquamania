import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../assets/aquamania-logo.gif";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoFish, IoFishOutline } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";

const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity,0);

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
            {isMenuOpen ? <IoFishOutline size={38} /> : <IoFish size={30} />}
          </Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="">
              <NavDropdown title="Fish" className="text-center">
                <Link to="/freshpage" className="dropdown-item text-center">
                  Freshwater Fish
                </Link>
                <Link to="/saltpage" className="dropdown-item text-center">
                  Saltwater Fish
                </Link>
              </NavDropdown>
              <Nav.Link href="/products" className="text-center">
                Products
              </Nav.Link>
              <Nav.Link href="/about" className="text-center">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cartpage" className="position-relative">
            <IoIosCart size={30} />
            {totalQuantity > 0 && (
              <Badge
                bg="success"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {totalQuantity}
              </Badge>
            )}
          </Link>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
