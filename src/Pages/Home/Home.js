import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCheck, faTools } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="showcase">
                <div className="color_overlay"></div>
                <div className="content_overlay">
                    <h1>SAM'S AUTO TECH</h1>
                    <h3>Your Best Auto Shop With Options</h3>

                    <div className="showcase_btns">
                        <button> <FontAwesomeIcon className='showc_btn_icns' icon={faCalendarAlt} /> Book An Appointment</button>
                        <button> <FontAwesomeIcon className='showc_btn_icns' icon={faTools} /> Services</button>
                    </div>
                </div>
            </div>
            <section className='mobile_container'>
                <div className="wrapper">
                <h3>Can't Come In? Don't worry, We Also Offer Mobile Serivices</h3>
                <button> <FontAwesomeIcon className='showc_btn_icns' icon={faCalendarAlt} /> Book Mobile Service</button>
                </div>
            </section>
            <section className="feature_services">
                <div className="wrapper">
                    <h3>Our Featured Services</h3>
                    <p className='services_intro'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                    <div className="services_container">
                        <div className="service">
                            <div className="">
                            <small>Auto Service</small>
                            <h4>Performance Upgrade</h4>
                            </div>
                            <div className="book_img">
                                <p>Book Service + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/transmission.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Transmission Services</h4>
                            </div>
                            <div className="book_img">
                                <p>Book Service + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/gearbox.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Break Repair & Service</h4>
                            </div>
                            <div className="book_img">
                                <p>Book Service + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/brake-disc.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Engine Service & Repair</h4>
                            </div>
                            <div className="book_img">
                                <p>Book Service + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/car-engine.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="service">
                        <div className="">
                            <small>Sale Service</small>
                            <h4>Part Sales</h4>
                            </div>
                            <div className="book_img">
                                <p>Visit part sales + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/tyre.png')} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="service">
                        <div className="">
                            <small>Auto Service</small>
                            <h4>Denting & Painting</h4>
                            </div>
                            <div className="book_img">
                                <p>Book Service + </p>
                                <div className="service_icn">
                                    <img src={require('../../Assets/Icons/spray-paint.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="quality_cheap">
                <div className="media">
                    <img src={require('../../Assets/mechanic_4.jpg')} alt="" />
                </div>
                <div className="content">
                    <h1 className='content_tagline'>Quality At A Lower Price!</h1>
                    <p>Why pay more for quality service? At Sam's Autos rendering quality jobs is our priority. We render quality service at an unbeatable price.</p>

                    <div className="additional_services">
                        <h4>Additional Services</h4>
                        <div className="services_add">
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                            <span><FontAwesomeIcon icon={faCheck} className='check_icn' /> General Auto Repair / Service</span>
                        </div>

                        <button className='book_services_button'>Book Services</button>
                    </div>
                </div>
            </div>

            <div className="best_world">
                <div className="wrapper">
                    <div className="content">
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
                        <button className="explore_parts">Explore Parts</button>
                    </div>
                    <div className="media"></div>
                </div>
            </div>

            <div className="repair_estimator">
                <div className="wrapper">
                    <h1>Car Repair Estimator</h1>
                    <p>Get a repair estimate depending on your car's condition</p>
                    <span>*prices might change, this is just an estimate.*</span>

                    <div className="estimator">
                        <div className="fields">
                            <select placeholder='Brand'>
                                <option value="">Honda</option>
                            </select>
                                
                            <select placeholder='Model'>
                                <option value="">Civic</option>
                            </select>
                        </div>

                        <div className="fields">
                            <select placeholder='Brand'>
                                <option value="">2012</option>
                            </select>
                                
                            <select placeholder='Model'>
                                <option value="">Performance Upgrade</option>
                            </select>
                        </div>
                        <div className="fields">
                            <input type="email" placeholder='Enter Email'/>
                        </div>
                        <button className='get_estimate_btn'>Get Estimate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
