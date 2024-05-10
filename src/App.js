import Header from "./Components/Header.js";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Footer from "./Components/Footer.js";
import FreshPage from "./Pages/FreshwaterPage.jsx";
import SaltPage from "./Pages/SaltwaterPage.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SpeciesDetail from "./Pages/SpeciesDetail.jsx";
import About from "./Pages/About.jsx"; 
import CartPage from "./Pages/CartPage.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshpage" element={<FreshPage />} />
          <Route path="/saltpage" element={<SaltPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/species/:name" element={<SpeciesDetail />} />
          <Route path="/cartpage" element ={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
