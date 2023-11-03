import Header from './Components/Header.js';
import Home from './Pages/Home.js'
import SinglePage from './Pages/SinglePage.js';
import Care from './Pages/Care.js';
import Products from './Pages/Products.js';
import Footer from './Components/Footer.js'
import FreshPage from './Pages/FreshwaterPage.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
<>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="freshpage" element={<FreshPage/>} /> 
          <Route path="/singlepage" element={<SinglePage />} />
          <Route path="/care" element={<Care/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
