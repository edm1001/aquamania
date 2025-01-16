import About from '../Components/About.js';
import Contact from '../Components/Contact.js';
import Welcome from '../Components/Welcome.js';

function Home() {
  return (
    <div className='bg-light'>
    <Welcome/>
    <Contact/>
    <About/>
    </div>
  );
}

export default Home;