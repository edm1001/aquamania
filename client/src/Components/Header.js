import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/bluelogo.png";
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
      <Navbar className="navbar bg-" sticky="top" expand="lg">
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="ms-3">
          <img
            src={Logo}
            width="100"
            height="100"
            alt="brand-logo"
            className="img-fluid brand-logo"
          />
        </Navbar.Brand>
        {/* Mobile Toggle */}
        <Navbar.Toggle
          className={`custom-menu ${isMenuOpen ? "menu-open" : ""}`}
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleClick}
        >
          {isMenuOpen ? (
            <IoFishOutline size={38} color="lightblue" />
          ) : (
            <IoFish size={30} color="lightgrey" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse className="">
          <Nav className="d-flex justify-content-end font-bold">
            <Nav.Link href="/" className="text-center">
              Home
            </Nav.Link>
            <NavDropdown title="Fish" className="text-center">
              <Link to="/freshpage" className="dropdown-item text-center">
                Freshwater Fish
              </Link>
              <Link to="/saltpage" className="dropdown-item text-center">
                Saltwater Fish
              </Link>
            </NavDropdown>
            {/* <Nav.Link href="/products" className="text-center">
              Products
            </Nav.Link> */}
            <Nav.Link href="/carepage" className="text-center">
              Care
            </Nav.Link>
            <Nav.Link href="/#contact" className="text-center">
              Contact
            </Nav.Link>
            <Nav.Link href="/#about" className="text-center">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default Header;

// FUTURE PLANS: Cart
// {/* <div className="cart-banner">
//   <Link to="/cartpage" className="position-relative me-2">
//     <IoIosCart size={20} />
//     {totalQuantity > 0 && (
//       <Badge
//         bg="danger"
//         pill
//         className="position-absolute top-0 start-100 translate-middle cart-badge"
//       >
//         {totalQuantity}
//       </Badge>
//     )}
//   </Link>
// </div> */}
// {/* <div className="cart-banner">
//   <Link to="/cartpage" className="position-relative me-2">
//     <IoIosCart size={20} />
//     {totalQuantity > 0 && (
//       <Badge
//         bg="danger"
//         pill
//         className="position-absolute top-0 start-100 translate-middle cart-badge"
//       >
//         {totalQuantity}
//       </Badge>
//     )}
//   </Link>
// </div> */}
