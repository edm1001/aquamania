import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/aquamania-logo.gif';

const Header = () => {
    return (
      <Navbar  sticky="top" bg="white" data-bs-theme="light" expand="md" >
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
        <NavDropdown title='Freshwater' bg='light'  >
        <NavDropdown.Item>Aggressive</NavDropdown.Item>
          <NavDropdown.Item>Semi-Aggresive</NavDropdown.Item>
          <NavDropdown.Item>Peaceful</NavDropdown.Item>
          </NavDropdown>

        <NavDropdown title='Saltwater'  >
          <NavDropdown.Item>Aggressive</NavDropdown.Item>
          <NavDropdown.Item>Semi-Aggresive</NavDropdown.Item>
          <NavDropdown.Item>Peaceful</NavDropdown.Item>
          </NavDropdown>
        <Nav.Link>About Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}

export default Header;