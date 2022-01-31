import React, {useState, useEffect} from 'react';
import './Admin.css'
import moment from 'moment';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Admin = () => {
    const [authorized, setauthorized] = useState(false);
    const [appts, setappts] = useState([]);
    const [estimatePrice, setestimatePrice] = useState('');
    const [estimateDescription, setestimateDescription] = useState('');
    const [estimates, setestimates] = useState([]);
    const accessCode = 'samauto247';
    useEffect(() => {
      if (!authorized) {
          const code = prompt('Enter Access Code')
          if (code == accessCode) {
              setauthorized(true)
          } else {
              setauthorized(false)
          }
      }
    }, [authorized]);

    useEffect(() => {
      fetchAppt()
      fetchEstimate()
    }, []);
    

    const fetchAppt = () => {
        const url = "http://localhost/samautotech/fetch_appt.php";

        fetch(url, {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setappts(data)
        })
    }

    const fetchEstimate = () => {
        const url = "http://localhost/samautotech/get_estimator.php";

        fetch(url, {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setestimates(data)
        })
    }

    const setEstimateHandler = (id) => {
        if (estimateDescription == '' || estimatePrice == '') {
            alert('Please Fill In All Fields For An Estimate');
            return false;
        }
        const url = 'http://localhost/samautotech/set_estimate.php'
        const formData = new FormData;
        formData.append("id", id)
        formData.append("price", estimatePrice)
        formData.append("details", estimateDescription)

        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => res.json()).then((data) => {
            setestimateDescription('')
            setestimatePrice('')
            fetchEstimate()
            alert(data)
        })
    }
    
  if (authorized) {
    return <div className='admin_container'>
                <i><a href="#estimate" style={{color: 'purple', textDecoration: 'underline'}}><span>move to estimates</span></a></i>
                <h1>All Appointments</h1>

                {appts.map(apt => (
                    <div className="appt" id='appt'>
                    <h3>{apt.fname + " " + apt.lname}</h3>
                    <p><span>Name:</span> {apt.fname + " " + apt.lname}</p>
                    <p><span>Email:</span> {apt.email}</p>
                    <p><span>Phone:</span> {apt.phone}</p>
                    <p><span>Address:</span> {apt.address == '' ? 'N/A' : apt.address}</p>
                    <p><span>Appointment Type:</span> {apt.type}</p>
                    <p><span>Vehicle Make:</span> {apt.v_make}</p>
                    <p><span>Vehicle Model:</span> {apt.v_model}</p>
                    <p><span>Vehicle Year:</span> {apt.v_year}</p>
                    <p><span>Other Vehicle:</span> {apt.other_vehicle == '' ? 'N/A' : apt.other_vehicle}</p>
                    <p><span>Description:</span> {apt.details}</p>
                    <p><span>Scheduled Date & Time:</span> {moment(apt.date).format("Do MMMM YYYY")} @ {apt.time}</p>
                    <Link to={apt.status !== 'confirmed' ? `/admin/schedule/${apt.id}` : '#'}><button style={{backgroundColor: apt.status == 'confirmed' ? 'grey' : '#990012'}}>Accept / Edit</button></Link>

                    <hr />
                </div>
                ))}

                <div id='estimate' className="estimates">
                    <br />
                <i><a href="#appt" style={{color: 'purple', textDecoration: 'underline'}}><span>move to appointments ^</span></a></i>
                    <h1>Pending Repair Estimates</h1>

                    {estimates.filter(es => es.price == '').map(est => (
                        <React.Fragment>
                            <div className="est_cnt">
                                <h3>{est.v_make} {est.v_model} {est.v_year}</h3>
                                <p><span>Vehicle Make:</span> {est.v_make}</p>
                                <p><span>Vehicle Model:</span> {est.v_model}</p>
                                <p><span>Vehicle Year:</span> {est.v_year}</p>
                                <p><span>Requested Service:</span> {est.v_service}</p>
                                <p><span>Email:</span> {est.email}</p>
                                <textarea  onChange={(e) => setestimateDescription(e.target.value)} placeholder='Description'></textarea>
                                <input onChange={(e) => setestimatePrice(e.target.value)} placeholder='Enter Estimate without $ sign' type="text" />
                                <button onClick={() => setEstimateHandler(est.id)}>Estimate!</button>
                            </div>
                        </React.Fragment>
                    ))}
                    <i><a href="#appt" style={{color: 'purple', textDecoration: 'underline'}}><span>move to appointments ^</span></a></i>
                </div>

                <br /><br />
    </div>;
  } else {
      return <div>
          <h1>Un Authorized - refresh page
          </h1>
      </div>
  }
};

export default Admin;

