

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

        <div className="cover3">
        <div className="services" id='services'>
            <h1>My Services</h1>
            <p>I Have Worked With A Number Of Clients.</p>


            <div className="s-cover">
                <div className="s1"><img src={five} alt="" /><h4>Custom Website & Develop</h4><p>
I offer end-to-end custom website development, including design, coding, testing, deployment, and ongoing support to meet your unique needs.</p></div>
                <div className="s1"><img src={responsive} alt="" /><h4>Responsive Design</h4><p>
I specialize in responsive design, creating websites that adapt seamlessly to any device, ensuring a consistent user experience.</p></div>
                <div className="s1"><img src={one} alt="" /><h4>E-commerce Development</h4><p>I provide e-commerce development services, building secure, user-friendly online stores with seamless payment integration and a smooth shopping experience.</p></div>
                <div className="s1"><img src={four} alt="" /><h4>Content Management System</h4><p>
I offer CMS development services, enabling easy content updates and management with user-friendly interfaces and robust functionality tailored to your needs.</p></div>
                <div className="s1"><img src={five} alt="" /><h4>Website Maintenance </h4><p>
I provide website maintenance services, ensuring your site stays updated, secure, and performs optimally with regular checkups and support.</p></div>
                <div className="s1"><img src={six} alt="" /><h4>SEO and Performance</h4><p>I offer SEO and performance optimization services to enhance your website's visibility, speed, and overall user experience.





</p></div>
                


            </div>


        </div>
        </div>
    )
}

export default Services
