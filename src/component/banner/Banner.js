

import React from 'react'
import "./Banner.css"
import {   FaLinkedinIn, FaGithub,  FaUserCircle , FaTwitter } from 'react-icons/fa'

import {useTypewriter, Cursor} from "react-simple-typewriter";
import html from "../../images/html.png"
import css from "../../images/css.png"
import javascript from "../../images/jj.png"
import react from "../../images/re.png"
import b from "../../images/b.png"
import { MdMenu } from "react-icons/md";





const Banner = (props) => {

    // console.log(props.showNavbar)
    
    const [text] = useTypewriter({
        words:["Frontend Developer" , "Web Designer"],
        loop:{},
    })


    function handleCLick(e){
        console.log("poor" , e)


    }


    // const showNavbar = () =>{
    //     // navRef.current.classList.toggle("responsive_nav");
    //     alert("hello")
    //   }



    return (
        <div className="banner" id='home'>
           
           
            {/* left section */}

            <div className="b-left">

                <div className="icons">
                  
               <a href='https://github.com/pawanrajora143'> <FaGithub /> </a>
               <a href='https://www.linkedin.com/in/pawan-rajora-848153191/'> <FaLinkedinIn /> </a>
               <a href='https://x.com/pawanrajora143'> <FaTwitter /></a>
                    
                    
                
                 


                </div>


                <div className="intro">
                    <span>👋 Hi There,</span>
                    <span>Pawan Rajora</span>
                    <span>I Am a <span>{text} </span><Cursor/></span> 
                     
                  
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
                {/* <div className="menuicon"> <button onClick={(e)=>handleCLick(e)} className='m-button'><MdMenu/></button></div> */}
                {/* <button className='nav-btn nav-close-btn' onClick={()=>props.showNavbar()}>onClick</button> */}
            </div>
        </div>
    )
}

export default Banner
