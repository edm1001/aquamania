import { Row, Col } from "react-bootstrap";
import Logo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <Row className="footer-row bg-dark text-white">
      <Col xl={4} lg={4} md={4} sm={4} xs={4} className="">
        <img src={Logo} alt="logo" height="100" width="100" className="img-fluid footer-logo"></img>
      </Col>
      <Col xl={8} lg={8} md={8} sm={8} xs={8} className="mt-1 footer-links">
        <div className="link-column text-white">
          <h6>Fish</h6>
          <p>
            <a href="/freshpage" className="footer-link text-white">
              Freshwater
            </a>
          </p>
          <p>
            <a href="/saltpage" className="footer-link text-white">
              Saltwater
            </a>
          </p>
        </div>
        <div className="link-column">
          <h6>Products</h6>
          <p> <a href='/products' className="footer-link text-white"> Recommended Products</a></p>
          <p> <a href='/products' className="footer-link text-white">Featured Products</a></p>
        </div>
        <div className="link-column">
          <h6>About Us</h6>
          <p><a href="/about" className="footer-link text-white">About Aquamania</a></p>
          <p><a href="/about" className="footer-link text-white">Our Mission</a></p>
        </div>
      </Col>
    </Row>
  );
};
export default Footer;
