import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Projects from './components/Projects';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
  <HeroSection/>
  <About/>
       <Projects/>   
       <Partners/>  
       <Footer/>
        
    </div>
  );
}

export default App;
