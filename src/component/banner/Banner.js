

import React, { useState } from 'react'
import "./Banner.css"
import { FaLinkedinIn, FaGithub, FaUserCircle, FaTwitter, FaBars, FaTimes } from 'react-icons/fa'

import { useTypewriter, Cursor } from "react-simple-typewriter";
import html from "../../images/html.png"
import css from "../../images/css.png"
import javascript from "../../images/jj.png"
import react from "../../images/re.png"
import b from "../../images/b.png"
import { MdMenu } from "react-icons/md";







const Banner = (props) => {
 
    const [openMenu, setOpenMenu] = useState(false)

    // console.log(props.showNavbar)

    const [text] = useTypewriter({
        words: ["Frontend Developer", "Web Designer"],
        loop: {},
    })


    function handleCLick(e) {
        console.log("poor", e)


    }


    // const showNavbar = () =>{
    //     // navRef.current.classList.toggle("responsive_nav");
    //     alert("hello")
    //   }



    return (

        <div className="wrapper">
        <div className="banner" id='home'>


            {/* left section */}

            <div className="b-left">

                <div
                 
                
                className="icons">

                    <a href= ' https://github.com/pawanrajora143'>  <FaGithub /> </a>
                    <a href='https://www.linkedin.com/in/pawan-rajora-848153191/'> <FaLinkedinIn /> </a>
                    <a href='https://x.com/pawanrajora143'> <FaTwitter /></a>

                </div>


                <div
               
                className="intro">
                    <span>👋 Hi There,</span>
                    <span>Pawan Rajora</span>
                    <span>I Am a <span>{text} </span><Cursor /></span>


                    <span>
                        I am a web designer and frontend developer, creating visually appealing, responsive websites with seamless user experiences and modern, efficient code.</span>
                    <a href="#about"><button className=' button b-button'><FaUserCircle />More About Me</button></a>
                </div>



                {/* <div className="info">
                    <div className=""> <p>Email:</p> <p>pawanrajora290@gmail.com</p></div>
                    <div className=""> <p>Phone:</p> <p>+9650 682 589</p></div>
                    <div className=""> <p>Location</p> <p>India , Delhi

</p></div>

                </div> */}


                <div className="imge1">
                    <span>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={b} alt="" />
                        <img src={javascript} alt="" />
                        <img src={react} alt="" />

                    </span>
                </div>

            </div>


            {/* left section */}
            {/* <Banner data={showNavbar}/> */}

            <div className="b-right">

                <div className={openMenu ? "navbar2 active" : "navbar2 "}>
                   


                    <ul>
                        <li><a href="#home" id='active2' onClick={() => setOpenMenu(false)} >home</a></li>
                        <li><a href="#about" onClick={() => setOpenMenu(false)}>about</a></li>
                        <li><a href="#skills" onClick={() => setOpenMenu(false)}>skills</a></li>
                        <li><a href="#services" onClick={() => setOpenMenu(false)}>services</a></li>
                        <li><a href="#project" onClick={() => setOpenMenu(false)}>project</a></li>
                        <li><a href="#contact" onClick={() => setOpenMenu(false)}>contact</a></li>
                    </ul>
                    <div className="nav-icons">
                        <FaBars name='menu-outline' className='mobile-nav-icons' onClick={() => setOpenMenu(true)} />
                        <FaTimes name='close-outline' className='close-outline mobile-nav-icons' onClick={() => setOpenMenu(false)} />
                    </div>


                </div>

            </div>
        </div>
        </div>
    )
}

export default Banner
