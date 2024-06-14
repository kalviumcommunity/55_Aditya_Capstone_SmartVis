import React from 'react'
import { Link } from "react-router-dom";
import "./About.css";

function About() {


    return (
        <>
            <div className='abt-logo'>
                <div className="navlogo">
                    <Link to="/" className='abt'><h1 className='logo'><span className='smart'>Smart</span><span className='vis'>Vis</span></h1></Link>
                </div>
                <div className='aboutsection'>
                    <div className="about-heading">
                        <h1>About Us</h1>
                    </div>
                    <div className="aboutusinfo">
                        <p>SmartVis is a leading Front Office Automation platform empowering Happy Workplaces for complete automation of Front Office & Gate operations.</p>
                    </div>
                </div>
            </div>

            <div className="aboutus-container">
                <div className="about-img">
                    <img src="https://happy-visitor.com/wp-content/uploads/2021/02/front-view-768x765-min.png" alt="" />
                </div>
                <div className="description">
                    <h1 className='title'>Top Leading Office Automation Company</h1>
                    <div className="data">
                        <p className='para'>At SmartVis, we lead the way in visitor management, offering top-tier solutions for front office automation software. With a passion for innovation, our team empowers businesses across industries to ensure safe, secure, and seamless on-site experiences for employees and visitors alike. Backed by our dedication to transforming everyday business operations, we're committed to excellence in every interaction.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;
