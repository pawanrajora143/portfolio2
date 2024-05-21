

import React from 'react'
import "./Navbar.css"


const Navbar = () => {





  return (
  
    <div className="sidebar">
        <div className="l-cover">
        <div className="logo">P</div>
        </div>
        <div className="navbar">
            <ul>
                <li><a href="#home" id='active' >home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#skills">skills</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#project">project</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </div>


    </div>


   
  )
}

export default Navbar
