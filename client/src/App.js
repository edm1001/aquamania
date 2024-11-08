import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import Home from "./Pages/Home.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import Footer from "./Components/Footer.js";
import FreshPage from "./Pages/FreshwaterPage.jsx";
import SaltPage from "./Pages/SaltwaterPage.jsx";
import { Route,Routes, useLocation } from "react-router-dom";
import SpeciesDetail from "./Pages/SpeciesDetail.jsx";
import CarePage from "./Pages/CarePage.jsx";
import LoadingSpinner from "./Components/LoadingSpinner.js";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      {loading && <LoadingSpinner />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshpage" element={<FreshPage />} />
          <Route path="/saltpage" element={<SaltPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/carepage" element={<CarePage />} />
          <Route path="/species/:name" element={<SpeciesDetail />} />
        </Routes>
      </div>
      <Footer className="footer" />
    </>
  );
}

export default App;
