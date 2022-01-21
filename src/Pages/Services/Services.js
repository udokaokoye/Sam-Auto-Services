import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Services.css'
const Services = () => {
    return (
        <div className='services_container'>
            <div className="services_showcase">
            <div className="ovrly">
                    <h1>Our Services</h1>
                </div>
            </div>

            <div className="services_offer">
                <div className="wrapper">
                    <h1>Services We Offer</h1>
                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>

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

                    <div className="add_services">
                        <h1>Additional Services Includes</h1>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                        <p><FontAwesomeIcon icon={faCheck} /> Transmission</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
