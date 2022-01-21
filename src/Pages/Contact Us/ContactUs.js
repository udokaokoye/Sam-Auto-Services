import { faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className='contact_container'>
            <div className="contact_showcase">
            <div className="ovrly">
                    <h1>Contact Us</h1>
                </div>
            </div>

            <div className="contact_form">
                <div className="wrapper">
                    <div className="form">
                        <h1>Drop Us A Message</h1>
                        <p>Fill in all required fields</p>
                        <p className="typ_reply">Typical Reply TIme: Within 1 hour</p>
                        <input type="text" placeholder='Enter Name' />
                        <input type="email" placeholder='Enter Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
                        <input type="text" placeholder='Phone Number (optional but prefered)'/>

                        <button>Send Message</button>
                    </div>
                    <div className="cont_info">
                        <h1>Our Address</h1>
                        <p>Please make sure to set an appointment and recieve confirmation mail before coming to the workshop. Customers without appointments will not be attended to. <br /> Thanks.</p>

                        <div className="addr">
                            <div className="icn"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div className="content">
                                <p>Address:</p>
                                <p>54B, Tailstoi Town 5238 MT, La city, IA 5224</p>
                            </div>
                        </div>

                        <div className="addr">
                            <div className="icn"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="content">
                                <p>Email:</p>
                                <p>Info@samautotech.com</p>
                            </div>
                        </div>

                        <div className="addr">
                            <div className="icn"><FontAwesomeIcon icon={faPhone} /></div>
                            <div className="content">
                                <p>Phone:</p>
                                <p>+1 513 668 2147</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map_view">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.7000523789243!2d-84.6019753847076!3d39.13605647953448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b58c89f07eff%3A0x27d85b83f8f0492c!2s2928%20Ferguson%20Rd%2C%20Cincinnati%2C%20OH%2045238!5e0!3m2!1sen!2sus!4v1642779357329!5m2!1sen!2sus" width="100%" height="100%"></iframe>
            </div>
        </div>
    )
}

export default ContactUs
