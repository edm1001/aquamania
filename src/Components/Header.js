import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/aquamania-logo.gif';

const Header = () => {
    return (
      <Navbar  sticky="top" bg="light" data-bs-theme="light" expand="lg" >
        <Container>
        <Navbar.Brand>
          <img 
          className=''
          src={Logo}
          width="80"
          height="80"
          alt='brnd-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse>
        <Nav>
        <Nav.Link>Fresnwater</Nav.Link>
        <Nav.Link>Saltwater</Nav.Link>
        <Nav.Link>Searchbar</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}

export default Header;