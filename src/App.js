import Header from './Components/Header.js';
import Home from './Pages/Home.js'
import Care from './Pages/Care.js';
import Products from './Pages/Products.js';
import Footer from './Components/Footer.js'
import FreshPage from './Pages/FreshwaterPage.js';
import SaltPage from './Pages/SaltwaterPage.js'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SpeciesDetail from './Components/SpeciesDetail.js';
import About from './Pages/About.js';
import Blog from './Pages/Blog.js';

function App() {
  return (
<>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshpage" element={<FreshPage/>} /> 
          <Route path="/saltpage" element={<SaltPage/>} /> 
          <Route path="/care" element={<Care/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/species/:name" element={<SpeciesDetail/>} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
