import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTools } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AOS from 'aos';
import 'aos/dist/aos.css'
import car_brands from '../../Components/carbrands'
const Home = () => {
    const [model, setmodel] = useState([])
    const [v_make, setv_make] = useState('')
    const [v_model, setv_model] = useState('')
    const [v_year, setv_year] = useState('')
    const [v_service, setv_service] = useState('')
    const [email, setemail] = useState('')
    const [otherService, setotherService] = useState('')
    const services = ["Basic Engine Check", "Full Engine services / Replacement", , "Electrical and electronics Diagnostics", , "Full suspension", , "All Brake services including EPB", , "Full Transmission services", , "GPS tracker systems", , "Bearing and CV Axle Shaft", , "Power steering", , "Alternator", , "Timing Belt", "Other"];
    useEffect(() => {
        if (v_make !== '') {
            fetchModel()
        }
    }, [v_make])

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

    const fetchModel = () => {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${v_make}?format=json`).then((res) => res.json()).then((data) => {
            setmodel(data.Results)
        })
    }

    function generateArrayOfYears() {
        var max = new Date().getFullYear()
        var min = max - 50
        var years = []
      
        for (var i = max; i >= min; i--) {
          years.push(i)
        }
        return years
      }

      const handleEstimate = () => {
          if (v_make == '' || v_year =='' || v_model == '' || v_service == '' || email == '') {
              alert('Please Fill In All Fields For An Estimate');
              return false;
          }

          if (v_service == 'Other' && otherService == '') {
            alert('Please Fill In All Fields For An Estimate');
            return false;
          }
          const url = "http://localhost/samautotech/add_estimate.php"
          const formData = new FormData

          formData.append('v_make', v_make)
          formData.append('v_model', v_model)
          formData.append('v_year', v_year)
          formData.append('v_service', v_service == 'Other' ? otherService : v_service)
          formData.append('email', email)

          fetch(url, {
              method: "POST",
              body: formData
          }).then((res) => res.json()).then((data) => {
              alert(data)
          })
      }
    return (
        <div>
            <div className="showcase">
                <div className="color_overlay"></div>
                <div className="content_overlay">
                    <h1 data-aos="fade-down" data-aos-duration="2000">SAM'S AUTO TECH</h1>
                    <h3 data-aos="fade-down" data-aos-duration="2000">Your Best Auto Shop With Options</h3>

                    <div className="showcase_btns" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-sine">
                        <Link to='/appointment'><button className='bk_appt'><FontAwesomeIcon className='showc_btn_icns' icon={faCalendarAlt} /> Book An Appointment</button></Link>
                        <Link to='/services'><button className='serv'> <FontAwesomeIcon className='showc_btn_icns' icon={faTools} /> Services</button></Link>
                    </div>
                </div>
            </div>
            <section data-aos="zoom-in" data-aos-duration="600" className='mobile_container'>
                <div className="wrapper">
                <h3>Can't Come In? Don't worry, We Also Offer Mobile Serivices</h3>
                <Link to='/appointment'><button> <FontAwesomeIcon className='showc_btn_icns' icon={faCalendarAlt} /> Book Mobile Service</button></Link>
                </div>
            </section>
            <section className="feature_services">
                <div className="wrapper">
                    <h3 data-aos="fade-down" data-aos-duration="600">Our Featured Services</h3>
                    <p data-aos="fade-down" data-aos-duration="600" className='services_intro'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
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
                        <div data-aos="fade-up" data-aos-duration="1000"  className="service">
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
                        <div data-aos="fade-up" data-aos-duration="1000"  className="service">
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
                        <div data-aos="fade-up" data-aos-duration="1000"  className="service">
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
                        <div data-aos="fade-up" data-aos-duration="1000"  className="service">
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
                </div>
            </section>

            <div className="quality_cheap">
                <div data-aos="fade-up" data-aos-duration="1500" className="media">
                    <img src={require('../../Assets/mechanic_4.jpg')} alt="" />
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="content">
                    <h1 className='content_tagline'>Quality At A Lower Price!</h1>
                    <p>Why pay more for quality service? At Sam's Autos rendering quality jobs is our priority. We render quality service at an unbeatable price.</p>

                    <div className="additional_services">
                        <h4>Additional Services</h4>
                        <div className="services_add">
                        <p><div className="icn"><img src={require('../../Assets/Icons/car-engine.png')} alt="" /></div> Full Engine services / Replacement</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/plug.png')} alt="" /></div> Electrical and electronics Diagnostics</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/car-engine.png')} alt="" /></div> Full suspension</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/brake-disc.png')} alt="" /></div> All  Brake services including EPB</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/gearbox.png')} alt="" /></div> Full Transmission services</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/placeholder (1).png')} alt="" /></div> GPS tracker systems</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/transmission.png')} alt="" /></div> Bearing and CV Axle Shaft</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/steering-wheel.png')} alt="" /></div> Power steering</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/battery.png')} alt="" /></div> Alternator</p>
                        <p><div className="icn"><img src={require('../../Assets/Icons/belt-drive-kit.png')} alt="" /></div> Timing Belt</p>
                        <p>And Many More...</p>
                        </div>

                        <Link to='/appointment'><button className='book_services_button'>Book Services</button></Link>
                    </div>
                </div>
            </div>

            <div className="best_world">
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0" className="media1">
                        <img src={require('../../Assets/sam\ banner.png')} alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className="content">
                        <h1>Best Of Both Worlds!</h1>
                        <p>Why go to the auto shop to get parts? With Sams Auto Tech you get the best of both worlds with our Auto Services and online part sales</p>

                        <h4>Parts include:</h4>
                        <ul>
                            <li>Breaks</li>
                            <li>Cylinder Block</li>
                            <li>Transmission</li>
                            <li>Axel</li>
                            <li>Fender</li>
                            <li>Bumper</li>
                            <li>Caliper</li>
                            <li>Doors</li>
                            <li>And Many More!</li>
                        </ul>
                        <Link to='/parts'><button className="explore_parts">Explore Parts</button></Link>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0" className="media">
                        <img src={require('../../Assets/sam\ banner.png')} alt="" />
                    </div>

            </div>

            <div className="repair_estimator">
                <div className="wrapper">
                    <h1>Car Repair Estimator</h1>
                    <p>Get a repair estimate depending on your car's condition</p>
                    <span>*prices might change, this is just an estimate.*</span>

                    <div className="estimator">
                        <div className="fields">
                            <select placeholder='Brand' onChange={(e) => setv_make(e.target.value)}>
                                {car_brands.map(brd => (
                                    <option value={brd}>{brd}</option>
                                ))}
                            </select>
                                
                            <select placeholder='Model' onChange={(e) => setv_model(e.target.value)}>
                                {model.map(md => (
                                    <option value={md.Model_Name}>{md.Model_Name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="fields">
                            <select placeholder='Brand' onChange={(e) => setv_year(e.target.value)}>
                            {generateArrayOfYears().map(year => (
                                <option key={year}>{year}</option>
                            ))}
                            </select>
                                
                            <select onChange={(e) => setv_service(e.target.value)} placeholder='Model'>
                                {services.map(servc => (
                                    <option>{servc}</option>
                                ))}
                            </select>
                        </div>
                        <div className="fields">
                            <input onChange={(e) => setemail(e.target.value)} type="email" name='email' placeholder='Enter Email'/>
                        </div>

                        <div className="fields">
                            <textarea style={{display: v_service == 'Other' ? "block" : 'none'}} onChange={(e) => setotherService(e.target.value)} placeholder='Enter Service Requested'></textarea>
                        </div>
                        <button onClick={() => handleEstimate()} className='get_estimate_btn'>Get Estimate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
