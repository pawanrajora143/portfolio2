
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/banner/Banner';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Portfolio from './component/portfolio/Portfolio';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Services from './component/services/Services';

import AnimatedCursourw from './component/AnimatedCursour/AnimatedCursour';
import Gotop from './component/gotopbutton/Gotop';


function App() {




  return (
    <div className="App">
       <Gotop/>
      {/* <AnimatedCursourw /> */}
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
