import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { IoSearchCircleSharp } from "react-icons/io5";
import FreshwaterFishData from "../db/Fresh/FeshwaterFishData.json";
import SaltwaterFishData from "../db/Salt/SaltwaterFishData.json";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFish, setFilteredFish] = useState([]);

  const handleSearch = (ev) => {
    const searchTerm = ev.target.value;
    setSearchTerm(searchTerm);
    const allFish = [...FreshwaterFishData, ...SaltwaterFishData];
    
    const filteredResults = allFish.filter(fish => 
      fish.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredFish(filteredResults);
  };

  return (
    <div>
    <input
      type="text"
      placeholder="Search fish..."
      value={searchTerm}
      onChange={handleSearch}
    />
    <ul>
      {filteredFish.map((fish, index) => (
        <li key={index}>
          <img src={fish.img} alt={fish.name} />
          <p>{fish.name}</p>
          <p>{fish.description}</p>
        </li>
      ))}
    </ul>
  </div>
    // <Row className="py-2 text-white">
    //   <Col>
    //     <h4 className="d-flex justify-content-center align-center mx-auto text-black">
    //       Search:
    //     </h4>
    //   </Col>
    //   <Col className="d-flex">
    //     {/* <Row> */}
    //       <Col className="pe-0" lg={8} md={8} sm={8} xs={8}>
    //         <Form.Control type="text" placeholder="Search" className="" />
    //       </Col>
    //       <Col className="ps-0" lg={4} md={4} sm={4} xs={4}>
    //         <IoSearchCircleSharp
    //           size={40}
    //           className="d-flex justify-content-center align-items-center search-btn"
    //         />
    //       </Col>
    //     {/* </Row> */}
    //   </Col>
    // </Row>
  );
}
