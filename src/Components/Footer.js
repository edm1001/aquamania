import { Row, Col } from "react-bootstrap";
import Logo from "../assets/aquamania-logo.gif";

const Footer = () => {
  return (
    <Row className="footer-row">
      <Col xl={4} lg={4} md={4} sm={4} xs={4}>
        <img src={Logo} alt="logo" className="img-fluid"></img>
      </Col>
      <Col xl={8} lg={8} md={8} sm={8} xs={8} className="mt-4 footer-links">
        <div className="link-column">
          <h6>Fish</h6>
          <p>
            <a href="/freshpage" className="footer-link text-secondary">
              Freshwater
            </a>
          </p>
          <p>
            <a href="/saltpage" className="footer-link text-secondary">
              Saltwater
            </a>
          </p>
        </div>
        <div className="link-column">
          <h6>Products</h6>
          <p> <a href='/products' className="footer-link text-secondary"> Recommended Products</a></p>
          <p> <a href='/products' className="footer-link text-secondary">Featured Products</a></p>
        </div>
        <div className="link-column">
          <h6>About Us</h6>
          <p><a href="/about" className="footer-link text-secondary">About Aquamania</a></p>
          <p><a href="/about" className="footer-link text-secondary">Our Mission</a></p>
        </div>
      </Col>
    </Row>
  );
};
export default Footer;
