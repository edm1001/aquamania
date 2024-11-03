import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Home from "./Pages/Home.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Footer from "./Components/Footer.js";
import FreshPage from "./Pages/FreshwaterPage.jsx";
import SaltPage from "./Pages/SaltwaterPage.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SpeciesDetail from "./Pages/SpeciesDetail.jsx";
import CarePage from "./Pages/CarePage.jsx"; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const data = await response.json();
      setCartItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("Trouble fetching cart items", err);
      setCartItems([]);
    }
  };



  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshpage" element={<FreshPage />} />
          <Route path="/saltpage" element={<SaltPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/carepage" element={<CarePage />} />
          <Route path="/species/:name" element={<SpeciesDetail />} />
          {/* <Route path="/cartpage" element ={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} /> */}
        </Routes>
        </div>
        <Footer className="footer" />
      </Router>
    </>
  );
}

export default App;
