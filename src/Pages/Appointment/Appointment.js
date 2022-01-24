import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Appointment.css'
const Appointment = () => {
    return (
        <div className='appointment_container'>
            <div className="wrapper">
                <h1>Book An Appointment</h1>
                <p>Schedule an auto repair appointment at Sam's Auto Tech.</p>

                <div className="personal_info">
                    <h3>Personal Information</h3>
                    <input type="text" className='name' placeholder='First Name'/>
                    <input type="text" className='lname' placeholder='Last Name'/>
                    <br />
                    <br />
                    <input type="email" className='email' placeholder='Email Address'/>
                    <input type="text" className='phone' placeholder='Phone Number'/>
                </div>

                <div className="appt_info">
                    <h3>Appointment Info</h3>
                    <p>Please select preferd method of service</p>
                    <div className="methd_cnt">
                        <div className="methd">
                            <input type="radio" />
                            <span>Drop off / Waiting (Drop off at location)</span>
                        </div>

                        <div className="methd">
                            <input type="radio" />
                            <span>Mobile Service (send auto repair man to your home)</span>
                        </div>
                    </div>

                    <textarea name="" id="" cols="60" rows="10" placeholder='Enter Address'></textarea>
                </div>

                <div className="vehicle_info">
                    <h3>Vehicle Information</h3>
                    <p>Please provide required information about vehicle</p>
                    <div className="options">
                        <select name="" id="">
                            <option value="">Acura</option>
                        </select>
                        <select name="" id="">
                            <option value="">MDX</option>
                        </select>
                        <select name="" id="">
                            <option value="">2012</option>
                        </select>
                    </div>
                </div>

                <div className="reason">
                    <h3>Reason For Scheduling Appointment</h3>
                    <p>Please briefly explain the vehicles fault or reason for scheduling the appointment</p>

                    <textarea placeholder='Please Briefly Explain Reason'></textarea>
                </div>

                <div className="date_time">
                    <h3>Select Date & Time</h3>

                    <div className="d_t_cnt">
                        <div className="date"><input type="date" /> <div className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></div></div>
                        <div className="date"> 
                        <select>
                            <option>11:00pm</option>
                        </select> 
                        <div className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></div>
                        </div>
                    </div>
                </div>

                <div className="alert_warning">
                    <p>Please note that the date and time you requested may not be available.
                    <br /> We will contact you to confirm your actual appointment details.</p>
                </div>

                <button>Book Now!</button>
            </div>
        </div>
    )
}

export default Appointment
