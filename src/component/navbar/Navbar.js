

import React, { useRef, useState } from 'react'
import "./Navbar.css"
import face from "./../../images/face.png"
import { FaBars, FaTimes } from 'react-icons/fa'





const Navbar = (props) => {

  const [active , setActive] = useState(false)

// const navRef = useRef();


// const showNavbar = () =>{
//   // navRef.current.classList.toggle("responsive_nav");
//   alert("hello")
// }

const handle = (item) =>{
  // console.log("pooora")
 setActive(item)
}


const data = props.showNavbar




  return (
  
    
    <div className="sidebar">
        <div className="l-cover">
        <div className="logo"><a href="#home">P</a></div>
        </div>


        <div  className="navbar">
      
       
            <ul>
                <li><a  href="#home" onClick={()=>handle("home")} id={active ==="home" ? "active" : "nonactive" } >home</a></li>
                <li><a href="#about"  onClick={()=>handle("about")} id={active ==="about" ? "active" : "nonactive" }>about</a></li>
                <li><a href="#skills" onClick={()=>handle("skills")} id={active ==="skills" ? "active" : "nonactive" }>skills</a></li>
                <li><a href="#services" onClick={()=>handle("services")} id={active ==="services" ? "active" : "nonactive" }>services</a></li>
                <li><a href="#project" onClick={()=>handle("project")} id={active ==="project" ? "active" : "nonactive" }>project</a></li>
                <li><a href="#contact"  onClick={()=>handle("contact")} id={active ==="contact" ? "active" : "nonactive" }>contact</a></li>
            </ul>

            
      
        </div>
        
    {/* <Banner showNavbar={showNavbar}/> */}
       

        <div className="image"><a href="#about"><img src={face} alt="" /></a></div>
       
    </div>




   
  )
}

export default Navbar
