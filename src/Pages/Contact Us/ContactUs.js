import { faEnvelope, faMapMarkedAlt, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import './ContactUs.css'
const ContactUs = () => {
    
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [subject, setsubject] = useState('')
    const [message, setmessage] = useState('')
    const [phone, setphone] = useState('')
    const [message_view, setmessage_view] = useState('')

    const contactFormHandler = () => {

        if (name == "" || email == "" || subject == "" || message == "") {
            alert("Please Fill In All Required Fields*")
            return;
        }
        const url = "http://localhost/samautotech/contact.php";
        const formData = new FormData;
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)
        formData.append('phone', phone)
        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            if (data == 'SUCCESS') {
                setmessage_view("Message Sent Succefully - check for reply within 1 hour")
            } else {
                setmessage_view('We are having issues sending your message, please try again later.')
            }
        })
    }
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
                        <div style={{display: message_view !== '' ? 'block' : 'none'}} className="messgae_view">
                            <p>{message_view}</p>
                        </div>
                        <input onChange={(e) =>setname(e.target.value)} type="text" placeholder='Enter Name*' name='name' />
                        <input onChange={(e) =>setemail(e.target.value)} type="email" placeholder='Enter Email*' />
                        <input onChange={(e) =>setsubject(e.target.value)} type="text" placeholder='Subject*' />
                        <textarea onChange={(e) =>setmessage(e.target.value)} name="" id="" cols="30" rows="10" placeholder='Enter Message*'></textarea>
                        <input onChange={(e) =>setphone(e.target.value)} type="text" placeholder='Phone Number (optional but prefered)'/>

                        <button onClick={() => contactFormHandler()}>Send Message</button>
                    </div>
                    <div className="cont_info">
                        <h1>Our Address</h1>
                        <p>Please make sure to set an appointment and recieve confirmation mail before coming to the workshop. Customers without appointments will not be attended to. <br /> Thanks.</p>

                        <div className="addr">
                            <div className="icn"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                            <div className="content">
                                <p>Address:</p>
                                <p>8633 Cincinnati Columbus rd Unit 49 Westchester OH 45069</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.2036494372423!2d-84.35416918859245!3d39.3289713031898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884050caa9303df5%3A0x1c8abbbc2c863b91!2s8633%20Cincinnati%20Columbus%20Rd%2C%20West%20Chester%20Township%2C%20OH%2045069!5e0!3m2!1sen!2sus!4v1642987081149!5m2!1sen!2sus" width="100%" height="100%"></iframe>
            </div>
        </div>
    )
}

export default ContactUs
