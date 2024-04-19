import { Row, Col } from "react-bootstrap";
import Logo from "../assets/aquamania-logo.gif";

const Footer = () => {
  return (
    <Row className="footer-row">
      <Col xl={6} lg={6} md={6} sm={6} xs={6}>
        <img src={Logo} alt="logo" className="img-fluid"></img>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6} xs={6} className="footer-links">
        <div className="px-2">
          <h6>Fish</h6>
          <a href="/freshpage" className="footer-link">
            Freshwater
          </a>
          <a href="/saltpage" className="footer-link">
            Saltwater
          </a>
        </div>
        <div className="px-2">
          <h6>Products</h6>
        </div>
        <div className="px-2">
          <h6>Products</h6>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
