import React, {useState, useEffect} from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
import { IoFish } from "react-icons/io5";
import FreshwaterFishData from "../db/Fresh/FeshwaterFishData.json";
import SaltwaterFishData from "../db/Salt/SaltwaterFishData.json";
import {Link} from "react-router-dom";

export default function Searchbar (isFreshwaterPage) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFish, setFilteredFish] = useState([]);
  const [showList, setShowList] = useState(false);

  // Close the search list when user clicks outside the input
  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (!ev.target.closest('.search-container')) {
        setShowList(false);
      }
  }
document.body.addEventListener('click', handleClickOutside);
return () => {
  document.body.removeEventListener('click', handleClickOutside);
};
}, [])

  const handleSearch = (ev) => {
    const searchTerm = ev.target.value;
    setSearchTerm(searchTerm);
    const fishData = isFreshwaterPage ? FreshwaterFishData : SaltwaterFishData;
    
    const filteredResults = fishData.filter(fish => 
      fish.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredFish(filteredResults);
    setShowList(true);
  };

  return (
    <div>
    <input
      type="text"
      placeholder="Search a fish..."
      value={searchTerm}
      onChange={handleSearch}
    />
    {showList && (
    <ul className="position-absolute start-0 bg-white opacity-100" >
      {filteredFish.map((fish, index) => (
        <li className="list-unstyled search-result "key={index}>
          <Link className="text-decoration-none" to={`/species/${encodeURIComponent(fish.name)}`}>
          {fish.name}
          </Link>
          <IoFish className="search-icon" />
        </li>
      ))}
    </ul>
)}
  </div>
  );
}
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
