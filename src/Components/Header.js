import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/aquamania-logo.gif';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar className="" sticky="top" bg="light" data-bs-theme="light" expand="lg" >
        <Container>
        <Navbar.Brand>
          <img 
          src={Logo}
          width="80"
          height="80"
          alt='brnd-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
        <Nav className=''>
        <NavDropdown title="Freshwater">
        <Link to="/category" className="dropdown-item">
        By Species
      </Link>
              <NavDropdown.Item>Aggressive</NavDropdown.Item>
              <NavDropdown.Item>Semi-Aggressive</NavDropdown.Item>
              <NavDropdown.Item>Peaceful</NavDropdown.Item>
            </NavDropdown>
        <NavDropdown title="Saltwater">
              <NavDropdown.Item>By Species</NavDropdown.Item>
              <NavDropdown.Item>Aggressive</NavDropdown.Item>
              <NavDropdown.Item>Semi-Aggressive</NavDropdown.Item>
              <NavDropdown.Item>Peaceful</NavDropdown.Item>
            </NavDropdown> 
        <Nav.Link className='text-center'>About Us</Nav.Link>
        <Nav.Link className='text-center'>Products</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;