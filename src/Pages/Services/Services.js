import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Services.css'
const Services = () => {

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
        <div className='services_container'>
            <div className="services_showcase">
            <div className="ovrly">
                    <h1>Our Services</h1>
                </div>
            </div>

            <div className="services_offer">
                <div className="wrapper">
                    <h1 data-aos="fade-up" data-aos-duration="1000">Services We Offer</h1>
                    <p data-aos="fade-up" data-aos-duration="1000">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>

                    <div className="services_container">
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                            <div className="">
                            <small>Auto Service</small>
                            <h4>Performance Upgrade</h4>
                            </div>
                            <div className="book_img">
                                <p><Link to='/appointment'>Book Service + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/transmission.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Transmission Services</h4>
                            </div>
                            <div className="book_img">
                                <p><Link to='/appointment'>Book Service + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/gearbox.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Break Repair & Service</h4>
                            </div>
                            <div className="book_img">
                                <p><Link to='/appointment'>Book Service + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/brake-disc.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Engine Service & Repair</h4>
                            </div>
                            <div className="book_img">
                                <p><Link to='/appointment'>Book Service + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/car-engine.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                        <div className="">
                            <small>Sale Service</small>
                            <h4>Part Sales</h4>
                            </div>
                            <div className="book_img">
                            <p><Link to='/parts'>Visit part sales + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/tyre.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Denting & Painting</h4>
                            </div>
                            <div className="book_img">
                                <p><Link to='/appointment'>Book Service + </Link></p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/spray-paint.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="add_services">
                        <h1>Additional Services Includes</h1>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/car-engine.png')} alt="" /></div> Full Engine services / Replacement</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/plug.png')} alt="" /></div> Electrical and electronics Diagnostics</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/car-engine.png')} alt="" /></div> Full suspension</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/brake-disc.png')} alt="" /></div> All  Brake services including EPB</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/gearbox.png')} alt="" /></div> Full Transmission services</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/placeholder (1).png')} alt="" /></div> GPS tracker systems</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/transmission.png')} alt="" /></div> Bearing and CV Axle Shaft</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/steering-wheel.png')} alt="" /></div> Power steering</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/battery.png')} alt="" /></div> Alternator</p>
                        <p data-aos="fade-up" data-aos-duration="1000"><div className="icn"><img src={require('../../Assets/Icons/belt-drive-kit.png')} alt="" /></div> Timing Belt</p>
                        <p data-aos="fade-up" data-aos-duration="1000">And Many More...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
