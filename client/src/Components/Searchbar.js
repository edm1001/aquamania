import React, { useState, useEffect } from "react";
import { IoFish } from "react-icons/io5";
import FreshwaterFishData from "../db/Fresh/FeshwaterFishData.json";
import SaltwaterFishData from "../db/Salt/SaltwaterFishData.json";
import { Link } from "react-router-dom";

export default function Searchbar({ isFreshwaterPage }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFish, setFilteredFish] = useState([]);
  const [showList, setShowList] = useState(false);

  // Close the search list when user clicks outside the input
  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (!ev.target.closest(".search-container")) {
        setShowList(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearch = (ev) => {
    const searchTerm = ev.target.value;
    setSearchTerm(searchTerm);
    const fishData = isFreshwaterPage ? FreshwaterFishData : SaltwaterFishData;

    const filteredResults = fishData.filter((fish) =>
      fish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFish(filteredResults);
    setShowList(true);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Search a fish..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {showList && (
           <ul className="list-group position-absolute">
           {filteredFish.map((fish, index) => (
             <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <Link
                className="text-decoration-none text-dark"
                to={`/species/${encodeURIComponent(fish.name)}`}
              >
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
