import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/whitelogo.png";

const Footer = () => {
  return (
    <Row className="footer-row bg-dark text-white">
      <Col xl={4} lg={4} md={4} sm={4} xs={4} className="">
        <img
          src={Logo}
          alt="logo"
          height="100"
          width="100"
          className="img-fluid footer-logo"
        ></img>
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
          <h6>Care Tips</h6>
          <p>
            {" "}
            <a href="/carepage" className="footer-link text-white">
              Freshwater Care
            </a>
          </p>
          <p>
            {" "}
            <a href="/carepage" className="footer-link text-white">
              Saltwater Care
            </a>
          </p>
        </div>
        <div className="link-column">
          <h6>About Us</h6>
          <p>
            <a href="/about" className="footer-link text-white">
              About Aquamania
            </a>
          </p>
          <p>
            <a href="/about" className="footer-link text-white">
              Our Mission
            </a>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
