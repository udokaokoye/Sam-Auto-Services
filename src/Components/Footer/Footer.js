import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCopyright, faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="contact_det">
                <div className="address">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>77, Demo Street 45221. <br />Cincinnati OH</p>
                </div>

                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>contact@samsautoservices.com</p>
                </div>

                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+ 1513 228 7764</p>
                </div>
            </div>

            <div className="wrapper">
                <div className="sec sec_1">
                    <div className="title">
                        <img src={require('../../Assets/logo4.png')} alt="" />
                    </div>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs.</p>
                    <button>Write A Review <FontAwesomeIcon icon={faStar} /></button>
                </div>
                <div className="sec sec_2">
                    <div className="title"><h1>Our Services</h1></div>
                    <div className="ft_links">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Book Appointment</p>
                        <p>Part Sales</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className="sec sec_3">
                <div className="title"><h1>Our Services</h1></div>
                    <div className="ft_links">
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Book Appointment</p>
                        <p>Part Sales</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className="sec sec_4">
                <div className="title"><h1>Newsletter</h1></div>
                    <span>Get latest updates and offers.</span>

                    <div className="input_submmit">
                        <input type="email" placeholder='Enter Email...' />
                        <div className="submitt_icn"><FontAwesomeIcon icon={faPaperPlane} /></div>
                    </div>

                    <div className="social_links">
                        <div className="icn_cont"><FontAwesomeIcon icon={faFacebook} /></div>
                        <div className="icn_cont"><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className="icn_cont"><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className="icn_cont"><FontAwesomeIcon icon={faTwitter} /></div>
                    </div>
                </div>
            </div>

            <div className="copyrights_developer">
                <p><FontAwesomeIcon icon={faCopyright} /> Copyrights <b>Sam's Auto</b> 2022. All rights reserved.</p>
                <p> <FontAwesomeIcon icon={faCode} /> Developed by <a href="https://udokaokoye.com/" target='_blank'>Levi Okoye</a></p>
            </div>
        </div>
    )
}

export default Footer
