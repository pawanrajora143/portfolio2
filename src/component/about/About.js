

import React from 'react'
import "./About.css"
import about from "../../images/face.png"
import {   FaAward , FaBriefcase, FaCode , FaSmile , FaDownload} from 'react-icons/fa'
import resume from "./../../images/resume.pdf"

const About = () => {
  return (
   <div className="about" id='about'>
    <h1>About Me</h1>
    <p>About Me And What I Love To Do.

</p>

    <div className="main">
        <div className="first"><img src={about} alt="" class="center" /></div>
        <div className="second"><h2>Hello, I'm Pawan Rajora, Based in India</h2><p>Passionate Frontend 
          Developer/Designer embracing React and cutting-edge technologies. Crafting engaging web experiences with
           creativity and technical expertise. Let's connect and elevate your projects! 🚀💻</p> 
           <button className='button a-button'><a href={resume} download="resume"><FaDownload/>Download My CV</a></button></div>
       
    </div>
    <div className="boxes">
      <div className="box1"><p><FaAward/></p><p>Experience</p><p className='extra'>4+ Years</p></div>
      <div className="box1"><p><FaBriefcase/></p><p>Completed</p><p className='extra'>20+ Projects</p></div>
      <div className="box1"><p><FaCode/></p><p>Designed</p><p className='extra'>150+ websites</p></div>
      <div className="box1"><p><FaSmile/></p><p>Happy Customers</p><p className='extra'>50+</p></div>
      
    </div>

   </div>
  )
}

export default About
