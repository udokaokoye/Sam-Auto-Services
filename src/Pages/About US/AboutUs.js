import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about_container'>
            <div className="about_showcase">
                <div className="ovrly">
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="brief_intro">
                <div className="wrapper">
                    <div className="content">
                        <h1> A highly skilled mechanic for your car repair</h1>

                        <p>
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                            <br />
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User generated content in real-time will have multiple.
                        </p>
                    </div>

                    <div className="media"></div>
                </div>
            </div>

            <div className="choose_us">
                <div className="content">
                    <h1>Why Choose Us</h1>

                    <div className="reasons">
                        <div className="icn">
                            <img src={require('../../Assets/Icons/gear.png')} alt="" />
                        </div>
                        <div className="cnt">
                            <h3>Smart Technology</h3>
                            <p>Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporate strategyfoster collaborative thinking to further.</p>
                        </div>
                    </div>

                    <div className="reasons">
                        <div className="icn">
                            <img src={require('../../Assets/Icons/best-price.png')} alt="" />
                        </div>
                        <div className="cnt">
                            <h3>Best & Reasonable Prices</h3>
                            <p>Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporate strategyfoster collaborative thinking to further.</p>
                        </div>
                    </div>

                    <div className="reasons">
                        <div className="icn">
                            <img src={require('../../Assets/Icons/fast-time.png')} alt="" />
                        </div>
                        <div className="cnt">
                            <h3>Timely Delivery</h3>
                            <p>Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporate strategyfoster collaborative thinking to further.</p>
                        </div>
                    </div>
                </div>
                <div className="media"></div>
            </div>

            <div className="satisfaction">
                <div className="wrapper">
                    <div className="sec">
                        <h1><span>100%</span> <br /> Satisfaction Guarantee</h1>
                    </div>
                    <div className="sec">
                        <div className="icn"><img src={require('../../Assets/Icons/customer-service.png')} alt="" /></div>
                        <h4>Quality Support</h4>
                        <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                    </div>
                    <div className="sec">
                    <div className="icn"><img src={require('../../Assets/Icons/electric-car.png')} alt="" /></div>
                        <h4>All Car Makes</h4>
                        <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                    </div>
                    <div className="sec">
                    <div className="icn"><img src={require('../../Assets/Icons/mechanic.png')} alt="" /></div>
                        <h4>Variety Services</h4>
                        <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
