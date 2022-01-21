import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav_container'>
            <div className="nav_wrapper">
                <div className="logo">
                    {/* <img src={require('../../Assets/logo4.png')} alt="" /> */}
                </div>
                <div className="links">
                    <Link to='/' className='rct_link active_link'><span>Home</span></Link>
                    <Link to='/about' className='rct_link'><span>About Us</span></Link>
                    <Link to='/services' className='rct_link'><span>Services</span></Link>
                    <Link to='/contact' className='rct_link'><span>Contact Us</span></Link>
                    <Link className='rct_link'><span>Parts</span></Link>
                    <div className="book_appt">
                    <button>Book An Appointment</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Nav
