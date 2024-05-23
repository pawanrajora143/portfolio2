

import React from 'react'
import "./Skills.css"
import { FaCheckCircle } from 'react-icons/fa'



const Skills = () => {
    return (
        <div className="skills" id='skills'>
            <h1>MY SKILLS</h1>
            <p>My technical level</p>

            <div className="skills-cover">
                <div className="s-boxes">

                    <div className="s-box"><p><FaCheckCircle />HTML5</p></div>
                    <div className="s-box"><p><FaCheckCircle />CSS3</p></div>
                    <div className="s-box"><p><FaCheckCircle />Bootstrap</p></div>


                </div>


                <div className="s-boxes">
                    <div className="s-box"><p><FaCheckCircle />JAVASCRIPT</p></div>
                    <div className="s-box"><p><FaCheckCircle />REACT</p></div>
                    <div className="s-box"><p><FaCheckCircle />REDUX</p></div>



                </div>

                <div className="s-boxes">

                    <div className="s-box"><p><FaCheckCircle />GIT</p></div>
                    <div className="s-box"><p><FaCheckCircle />GITHUB</p></div>
                    <div className="s-box"><p><FaCheckCircle />SASS</p></div>


                </div>
                <div className="s-boxes">

                    <div className="s-box"><p><FaCheckCircle />TAILWIND CSS</p></div>
                    <div className="s-box"><p><FaCheckCircle />FIREBASE</p></div>
                    <div className="s-box"><p><FaCheckCircle />DOM
                    </p></div>


                </div>

            </div>


        </div>
    )
}

export default Skills
