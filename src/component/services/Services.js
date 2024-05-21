

import React from 'react'
import "./Services.css"
import one from "../../images/1.png"
import two from "../../images/2.png"
import three from "../../images/3.png"
import four from "../../images/4.png"
import five from "../../images/5.png"
import six from "../../images/6.png"
import responsive from "../../images/responsive2.png"
import online from "../../images/online2.png"
import ee from "../../images/eee.jpg"


const Services = () => {
    return (
        <div className="services" id='services'>
            <h1>My Services</h1>
            <p>I Have Worked With A Number Of Clients.</p>


            <div className="s-cover">
                <div className="s1"><img src={five} alt="" /><h4>Custom Website & Develop</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                <div className="s1"><img src={responsive} alt="" /><h4>Responsive Design</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                <div className="s1"><img src={ee} alt="" /><h4>E-commerce Development</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                <div className="s1"><img src={four} alt="" /><h4>Content Management System</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                <div className="s1"><img src={five} alt="" /><h4>Website Maintenance </h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                <div className="s1"><img src={six} alt="" /><h4>SEO and Performance</h4><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium aut repellendus rem non repudiandae sint dolor illo officia dignissimos</p></div>
                


            </div>


        </div>
    )
}

export default Services
