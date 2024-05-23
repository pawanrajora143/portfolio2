
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


function App() {

  // let nav = true;
  // const showNavbar = () =>{
  //   // navRef.current.classList.toggle("responsive_nav");
  //   // alert("hello")
  //   // const li = document.querySelectorAll("ul")
  //   // document.querySelector('.banner').style.width = '93%';
  //   // document.querySelector('.sidebar').style.width = '7%';
  //   // document.querySelector('.sidebar').style.left = '0%';

    

  //   if(nav){ 
  //     console.log("clicked")
  //     document.querySelector('.banner').style.width = '100%';
  //   document.querySelector('.sidebar').style.width = '0%';
  //   document.querySelector('.sidebar').style.left = '-100%';
  //   nav = false;
     
  //   }

  //   else{ 
  //     console.log("nonclicked")
  //     document.querySelector('.banner').style.width = '93%';
  //   document.querySelector('.sidebar').style.width = '7%';
  //   document.querySelector('.sidebar').style.left = '0%';
  //   nav = true;
     
  //   }

   
  // }


  return (
    <div className="App">
<AnimatedCursourw />
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
