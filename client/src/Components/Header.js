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
      <div className="cart-banner">
        <Link to="/cartpage" className="position-relative me-2">
          <IoIosCart size={20} />
          {totalQuantity > 0 && (
            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle cart-badge"
            >
              {totalQuantity}
            </Badge>
          )}
        </Link>
      </div>
      <Navbar
        className="mb-5 mt-3"
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
            className={`custom-menu ${isMenuOpen ? "menu-open" : ""} ms-auto`}
            aria-controls="responsive-navbar-nav"
            onClick={handleToggleClick}
          >
            {isMenuOpen ? <IoFishOutline size={38} /> : <IoFish size={30} />}
          </Navbar.Toggle>
          <Navbar.Collapse className="justify-content-center">
            <Nav>
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
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Header;
