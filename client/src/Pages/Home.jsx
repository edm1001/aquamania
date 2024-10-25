import About from '../Components/About.js';
import Contact from '../Components/Contact.js';
import Welcome from '../Components/Welcome.js';

function Home() {
  return (
    <div style={{backgroundColor: "#007ea7"}}>
    <Welcome/>
    <About/>
    <Contact/>
    </div>
  );
}

export default Home;