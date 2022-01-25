import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react'
import './Appointment.css'
const Appointment = () => {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [type, settype] = useState('')
    const [v_make, setv_make] = useState('')
    const [v_model, setv_model] = useState('')
    const [v_year, setv_year] = useState('')
    const [details, setdetails] = useState('')
    const [date, setdate] = useState('')
    const [address, setaddress] = useState('')
    const [time, settime] = useState('')
    const [make, setmake] = useState([])
    const [makeid, setmakeid] = useState('0')
    const [model, setmodel] = useState([])

    useEffect(() => {
        fetchMake()
        // console.log(generateArrayOfYears())
    }, [])

    useEffect(() => {
        if (v_make !== '') {
            fetchModel()
        }
    }, [v_make])
    

    
    const fetchMake = () => {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json').then((res) => res.json()).then((data) => {
            setmake(data.Results)
        })
    }

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

    const bookNowHandler = () => {
        if (fname == '' || lname == '' || email == '' || phone == '' || type == '' || v_make == 'default' || v_model == 'default' || v_year == 'default' || v_make == '' || v_model == '' || v_year == '' || details == '' || date == '' || time == '') {
            alert("Please Fill In All Fields")
            return false;
        }

        if(type == 'mobile' && address == '') {
            alert("Please Fill In All Fields")
            return false;
        }

        // alert(v_year);
        // return;
        const url = 'http://localhost/samautotech/book_appointment.php';
        const formData = new FormData;
        formData.append("fname", fname);
        formData.append("lname", lname);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("type", type);
        formData.append("address", type == 'default' ? '' : address);
        formData.append("v_make", v_make);
        formData.append("v_model", v_model);
        formData.append("v_year", v_year);
        formData.append("details", details);
        formData.append("date", date);
        formData.append("time", time);

        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            if (data == 'SUCCESS') {
                alert("Appointment Scheduled, please wait for confirmation call or email before heading to the shop")
            } else {
                alert("We are having issues scheduling your appointment, please try again later or contact us using the contact form in the contact page.")
            }
        })
    }
    return (
        <div className='appointment_container'>
            <div className="wrapper">
                <h1>Book An Appointment</h1>
                <p>Schedule an auto repair appointment at Sam's Auto Tech.</p>

                <div className="personal_info">
                    <h3>Personal Information</h3>
                    <input onChange={(txt) => setfname(txt.target.value)} type="text" className='name' placeholder='First Name'/>
                    <input onChange={(txt) => setlname(txt.target.value)} type="text" className='lname' placeholder='Last Name'/>
                    <br />
                    <br />
                    <input onChange={(txt) => setemail(txt.target.value)} type="email" className='email' placeholder='Email Address'/>
                    <input onChange={(txt) => setphone(txt.target.value)} type="text" className='phone' placeholder='Phone Number'/>
                </div>

                <div className="appt_info">
                    <h3>Appointment Info</h3>
                    <p>Please select preferd method of service</p>
                    <div className="methd_cnt">
                        <div className="methd">
                            <input type="radio" value='default' checked={type === 'default'} onChange={(e) => settype(e.target.value)} />
                            <span>Drop off / Waiting (Drop off at location)</span>
                        </div>

                        <div className="methd">
                            <input type="radio" value='mobile' checked={type === 'mobile'} onChange={(e) => settype(e.target.value)} />
                            <span>Mobile Service (send auto repair man to your home)</span>
                        </div>
                    </div>

                    <input onChange={(txt) => setaddress(txt.target.value)} style={{display: type == 'mobile' ? 'block' : 'none'}} type='text' name="address" placeholder='Enter Your Address*' />
                </div>

                <div className="vehicle_info">
                    <h3>Vehicle Information</h3>
                    <p>Please provide required information about vehicle</p>
                    <div className="options">
                        <select onChange={(e) => setv_make(e.target.value)}>
                            <option value="default">Choose Make*</option>
                            {make.map(mk => (
                                <option key={mk.Make_Name}>{mk.Make_Name}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setv_model(e.target.value)}>
                            <option value="default">Choose Model*</option>
                            {model.map(md => (
                                <option key={md.Model_Name}>{md.Model_Name}</option>
                            ))}
                        </select>
                        <select onChange={(e) => setv_year(e.target.value)}>
                            <option value="default">Choose Year*</option>
                            {generateArrayOfYears().map(year => (
                                <option key={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="reason">
                    <h3>Reason For Scheduling Appointment</h3>
                    <p>Please briefly explain the vehicles fault or reason for scheduling the appointment</p>

                    <textarea onChange={(e) => setdetails(e.target.value)} placeholder='Please Briefly Explain Reason'></textarea>
                </div>

                <div className="date_time">
                    <h3>Select Date & Time</h3>

                    <div className="d_t_cnt">
                        <div className="date"><input id='date' type="date" onChange={(e) => setdate(e.target.value)} /> <label for='date' className="icn"><FontAwesomeIcon icon={faCalendarAlt} /></label></div>
                        <div className="date"> 
                        <select onChange={(e) => settime(e.target.value)}>
                            <option value={"11:00pm"}>11:00pm</option>
                            <option value={"11:00pm"}>11:00pm</option>
                        </select> 
                        <div className="icn"><FontAwesomeIcon icon={faClock} /></div>
                        </div>
                    </div>
                </div>

                <div className="alert_warning">
                    <p>Please note that the date and time you requested may not be available.
                    <br /> We will contact you to confirm your actual appointment details.</p>
                </div>

                <button onClick={() => bookNowHandler()}>Book Now!</button>
            </div>
        </div>
    )
}

export default Appointment
