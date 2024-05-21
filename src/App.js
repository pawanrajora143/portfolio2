
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/banner/Banner';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Services from './component/services/Services';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Banner/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
