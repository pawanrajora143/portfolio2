

import React from 'react'
import "./Contact.css"
import { FaTelegramPlane , FaPhoneAlt, FaEnvelope ,FaLocationArrow  } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <h1>Contact Me</h1>
            <p>Feel Free To Contact Me Any Time</p>

            <div className="main-contact">
                <div className="c-first">
                    <form action="">
                        <div className="form-user">
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="form-user1">
                            <input type="text" placeholder='Enter Your Subject' />
                        </div>
                        <div className="form-user1">
                            <textarea name="message" placeholder='Enter Your Message' id=""></textarea>
                        </div>
                        <button className='button c-button'><span><FaTelegramPlane /></span>Send Message</button>
                    </form>
                </div>
                <div className="c-second">
                    <h2>Let's Talk About Everything!
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit

                    </p>

                <div className="icons">
                    <div className="icons1">
                        <FaPhoneAlt/> <p>+(91) 96-5068-2589</p>
                    </div>
                    <div className="icons1">
                        <FaEnvelope/> <p>pawanrajora143@gmail.com</p>
                    </div>
                    <div className="icons1">
                        <FaLocationArrow/> <p>A-405 Tigri Near by saket</p>
                    </div>
                    
                </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
