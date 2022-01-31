import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCopyright, faEnvelope, faMapMarkerAlt, faPaperPlane, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="contact_det">
                <div className="address">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>8633 Cincinnati Columbus rd Unit 49 <br />Westchester OH 45069</p>
                </div>

                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>contact@samsautoservices.com</p>
                </div>

                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+1 513 869 3801</p>
                </div>
            </div>

            <div className="wrapper">
                <div className="sec sec_1">
                    <div className="title">
                        <img src={require('../../Assets/logo4.png')} alt="" />
                    </div>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide additional clickthroughs.</p>
                   <Link to='/reviews/add'><button>Write A Review <FontAwesomeIcon icon={faStar} /></button></Link>
                </div>
                <div className="sec sec_2">
                    <div className="title"><h1>Quick Links</h1></div>
                    <div className="ft_links">
                        <p><Link to='/'>Home</Link></p>
                        <p><Link to='/about'>About Us</Link></p>
                        <p><Link to='/appointment'>Book Appointment</Link></p>
                        <p><Link to='/parts'>Part Sales</Link></p>
                        <p><Link to='/contact'>Contact Us</Link></p>
                    </div>
                </div>
                <div className="sec sec_3">
                <div className="title"><h1>Quick Links</h1></div>
                    <div className="ft_links">
                        <p><Link to='/reviews'>View Review</Link></p>
                        <p><Link to='/reviews/add'>Write Review</Link></p>
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
