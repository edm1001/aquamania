import { Row, Col } from "react-bootstrap";
import Logo from "../assets/aquamania-logo.gif";

const Footer = () => {
  return (
    <Row className="footer-row">
      <Col xl={4} lg={4} md={4} sm={4} xs={4}>
        <img src={Logo} alt="logo" className="img-fluid"></img>
      </Col>
      <Col xl={8} lg={8} md={8} sm={8} xs={8} className="footer-links d-flex flex-row">
        <div className="fish-footer">
          <h6>Fish</h6>
          <div className="flex-link-column">
          <a href="/freshpage" className="footer-link text-secondary">
            Freshwater
          </a>
          <a href="/saltpage" className="footer-link text-secondary">
            Saltwater
          </a>
          </div>
        </div>
        <div className="">
          <h6>Products</h6>
          <p>Recommended Products</p>
          <p>Featured Products</p>
        </div>
        <div className="">
          <h6>About Us</h6>
          <p>About Aquamania</p>
          <p>Basic Fish Care</p>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
