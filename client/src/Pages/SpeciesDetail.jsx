import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import freshwaterFishSpecies from "../db/Fresh/FeshwaterFishData.json";
import saltwaterFishSpecies from "../db/Salt/SaltwaterFishData.json";
import { FaArrowLeft } from "react-icons/fa";

const SpeciesDetail = () => {
  const { name } = useParams();
  const allFishSpecies = freshwaterFishSpecies.concat(saltwaterFishSpecies);
  const selectedSpecies = allFishSpecies.find(
    (species) => species.name === decodeURIComponent(name)
  );

  if (!selectedSpecies) {
    return <div>Species not found</div>;
  }
  return (
    <Container className="p-5 species-section">
      <div className="species-card p-4 rounded">
      <Row className="mb-4">
        <div className="d-flex align-items-center">
          <button
            className="btn btn-success btn-rounded me-3"
            style={{ height: "50px", width: "50px" }}
            onClick={() => window.history.back()}
            >
            <FaArrowLeft />
          </button>
          <div>
            <h1 className="mb-0">{selectedSpecies.name}</h1>
            <p className="ms-3 mb-0 species-info">{selectedSpecies.species}</p>
          </div>
        </div>
      </Row>

      <Row>
        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mb-4">
          <img
            src={selectedSpecies.image}
            alt={selectedSpecies.name}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
            />
        </Col>

        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="pt-3">
          <Row>
            <p className="col-6 fw-semibold species-info">
              Temperament: {selectedSpecies.temperament}
            </p>
            <p className="col-6 fw-semibold species-info">
              Max Growth Size: {selectedSpecies.maxGrowthSize}
            </p>
            <p className="col-6 fw-semibold species-info">
              Temperature Range: {selectedSpecies.temperatureRange}
            </p>
            <p className="col-6 fw-semibold species-info">
              pH Range: {selectedSpecies.waterPHRange}
            </p>
          </Row>
          <p className="mt-3 text-start">{selectedSpecies.description}</p>
        </Col>
      </Row>
            </div>
    </Container>
  );
};
export default SpeciesDetail;
