import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import freshwaterFishSpecies from "../db/Fresh/FeshwaterFishData.json";
import saltwaterFishSpecies from "../db/Salt/SaltwaterFishData.json";

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
    <Container>
      <Row>
        <div className="d-flex">
          <h1>{selectedSpecies.name}</h1>
          <p className="ms-3 species-info">{selectedSpecies.species}</p>
        </div>
        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="">
          <img
            src={selectedSpecies.img}
            alt={selectedSpecies.name}
            className="img-fluid align-center"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
        <Col xl={6} lg={6} md={6} sm={12} xs={12} className=" pt-3">
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
          <p className="mt-1 fs-6 text-start">{selectedSpecies.description}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default SpeciesDetail;
