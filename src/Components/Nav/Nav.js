import { faBars, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
    const [sidebar, setsidebar] = useState(false)

    
function disableScroll() {
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(0, 0);
        };
}

// if (!sidebar) {
//     enableScroll()
// }

useEffect(() => {
    if (sidebar) {
        disableScroll()
    } else if (!sidebar) {
        enableScroll()
    }
}, [sidebar])
  
function enableScroll() {
    window.onscroll = function() {};
}
    return (
        <div className='nav_container'>

            <div className="side_bar" style={{display: sidebar ? 'block' : 'none'}}>
                <div className="wrapper">
                        <div className="logo">
                            <FontAwesomeIcon onClick={() => setsidebar(false)} className='side_close' icon={faTimes} color='white' />
                        </div>

                        <div className="links">
                            <Link to='/' className='rct_link active_link'><span>Home</span></Link>
                            <Link to='/about' className='rct_link'><span>About Us</span></Link>
                            <Link to='/services' className='rct_link'><span>Services</span></Link>
                            <Link to='/contact' className='rct_link'><span>Contact Us</span></Link>
                            <Link to='/parts' className='rct_link'><span>Parts</span></Link>
                            <Link to='/reviews' className='rct_link'><span><FontAwesomeIcon color='#f1d623' icon={faStar} /> Reviews</span></Link>
                            <div className="book_appt">
                            <Link to='/appointment'><button>Book An Appointment</button></Link>
                            </div>
                        </div>
                </div>
            </div>
            <div className="nav_wrapper">
                <div className="logo">
                    {/* <img src={require('../../Assets/logo4.png')} alt="" /> */}
                </div>
                <div className="links">
                    <Link to='/' className='rct_link active_link'><span>Home</span></Link>
                    <Link to='/about' className='rct_link'><span>About Us</span></Link>
                    <Link to='/services' className='rct_link'><span>Services</span></Link>
                    <Link to='/contact' className='rct_link'><span>Contact Us</span></Link>
                    <Link to='/parts' className='rct_link'><span>Parts</span></Link>
                    <Link to='/reviews' className='rct_link'><span><FontAwesomeIcon color='#f1d623' icon={faStar} /> Reviews</span></Link>
                    <div className="book_appt">
                    <Link to='/appointment'><button>Book An Appointment</button></Link>
                    </div>
                </div>
                
                <div onClick={() => {setsidebar(!sidebar)}} className="menu"><FontAwesomeIcon icon={faBars} /></div>
            </div>

            
        </div>
    )
}

export default Nav
