import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])
      useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    }, [])
    return (
        <div className='about_container'>
            <div className="about_showcase">
                <div className="ovrly">
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="brief_intro">
                <div className="wrapper">
                <div data-aos="fade-up" data-aos-duration="1000" className="media1"></div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="content">
                        <h1> A highly skilled mechanic for your car repair</h1>

                        <p>
                            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                            <br />
                            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information heading towards a streamlined cloud solution. User generated content in real-time will have multiple.
                        </p>

                       <Link to='/reviews/add'> <button><FontAwesomeIcon icon={faStar} /> Write A Review</button></Link>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1000" className="media"></div>
                </div>
            </div>

            <div className="choose_us">
            <div data-aos="fade-up" data-aos-duration="1000" className="media1"></div>
                <div data-aos="fade-up" data-aos-duration="1000" className="content">
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

                    <Link to='/reviews'> <button>View Our Reviews <FontAwesomeIcon icon={faStar} /></button></Link>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="media"></div>
            </div>

            <div className="satisfaction">
                <div className="wrapper">
                    <div  className="sec">
                        <h1><span>100%</span> <br /> Satisfaction Guarantee</h1>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="sec">
                        <div className="icn"><img src={require('../../Assets/Icons/customer-service.png')} alt="" /></div>
                        <h4>Quality Support</h4>
                        <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="sec">
                    <div className="icn"><img src={require('../../Assets/Icons/electric-car.png')} alt="" /></div>
                        <h4>All Car Makes</h4>
                        <p>Our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="sec">
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
