import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
      <Navbar className="mt-3" sticky="top" data-bs-theme="light" expand="lg">
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="ms-4">
          <img src={Logo} width="80" height="80" alt="brand-logo" />
        </Navbar.Brand>
        {/* Mobile Toggle */}
        <Navbar.Toggle
          className={`custom-menu ${isMenuOpen ? "menu-open" : ""}`}
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleClick}
        >
          {isMenuOpen ? <IoFishOutline size={38} /> : <IoFish size={30} />}
        </Navbar.Toggle>
        <Navbar.Collapse className="">
          <Nav className="d-flex justify-content-end">
            <NavDropdown title="Fish " className="text-center">
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
            <Nav.Link href="/carepage" className="text-center">
              Care
            </Nav.Link>
            <Nav.Link href="#about" className="text-center">
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
