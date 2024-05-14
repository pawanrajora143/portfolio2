

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





const Banner = () => {

    
    const [text] = useTypewriter({
        words:["Frontend Developer" , "Web Designer"],
        loop:{},
    })


    function handleCLick(e){
        console.log("poor" , e)


    }



    return (
        <div className="banner">
           

            {/* left section */}

            <div className="b-left">

                <div className="icons">
                  
                <FaGithub />
                    <FaLinkedinIn />
                    
                    <FaTwitter />
                 


                </div>


                <div className="intro">
                    <span>👋 Hi There,</span>
                    <span>Pawan Rajora</span>
                    <span>I Am a <span>{text} </span><Cursor/></span> 
                     
                  
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla pretium lacus, eu luctus neque ultricies a.</span>
                    <button className=' button b-button'><FaUserCircle />More About Me</button>
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


            <div className="b-right">
                <div className="menuicon"> <button onClick={(e)=>handleCLick(e)} className='m-button'><MdMenu/></button></div>
           


            </div>

        


        </div>
    )
}

export default Banner
