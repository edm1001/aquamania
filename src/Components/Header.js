import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/aquamania-logo.gif';

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
        <Nav>
        <Nav.Link className='text-center'>Home</Nav.Link>
        <Nav.Link className='text-center'>Fish Care</Nav.Link>
        <Nav.Link className='text-center'>Products</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;