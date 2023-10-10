import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/aquamania-logo.gif'

const Header = () => {
    return (
      <Navbar className="" sticky="top" bg="dark" data-bs-theme="light" expand="lg" >
        <Navbar.Brand>
          <img 
          src={Logo}
          width="80"
          height="80"
          alt='brnd-logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        
        <Nav>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Fish Care</Nav.Link>
        <Nav.Link>Products</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Header;