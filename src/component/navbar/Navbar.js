

import React, { useRef } from 'react'
import "./Navbar.css"
import face from "./../../images/face.png"
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = (props) => {

// const navRef = useRef();


// const showNavbar = () =>{
//   // navRef.current.classList.toggle("responsive_nav");
//   alert("hello")
// }


const data = props.showNavbar




  return (
  
    
    <div className="sidebar">
        <div className="l-cover">
        <div className="logo">P</div>
        </div>


        <div  className="navbar">
      
       
            <ul>
                <li><a href="#home" id='active' >home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#project">project</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            
      
        </div>
        
    {/* <Banner showNavbar={showNavbar}/> */}
       

        <div className="image"><img src={face} alt="" /></div>
       
    </div>




   
  )
}

export default Navbar
